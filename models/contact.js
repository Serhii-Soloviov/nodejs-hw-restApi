const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const Joi = require("joi");
const dateRegexp = /^\(\d{3}\) \d{3}-\d{4}$/;
const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: false }
);
contactSchema.post("save", handleMongooseError);

const schemaPost = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().min(3).required().email(),
  phone: Joi.string()
    .pattern(dateRegexp)
    .messages({ "string.pattern.base": `Phone number must have 10 digits.` })
    .required(),
});

const schemaPut = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().min(3).email().required(),
  phone: Joi.string()
    .pattern(dateRegexp)
    .messages({ "string.pattern.base": `Phone number must have 10 digits.` })
    .required(),
}).min(1);

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  schemaPost,
  schemaPut,
  updateFavoriteSchema,
};

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  schemas,
};
