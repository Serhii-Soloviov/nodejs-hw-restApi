const Joi = require("joi");

const schemaPost = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().min(3).required().email(),
  phone: Joi.string()
    .regex(/^[0-9]{10}$/)
    .messages({ "string.pattern.base": `Phone number must have 10 digits.` })
    .required(),
});

const schemaPut = Joi.object({
  name: Joi.string().min(3).optional(),
  email: Joi.string().min(3).email().optional(),
  phone: Joi.string()
    .regex(/^[0-9]{10}$/)
    .messages({ "string.pattern.base": `Phone number must have 10 digits.` })
    .optional(),
}).min(1);

module.exports = {
  schemaPost,
  schemaPut,
};
