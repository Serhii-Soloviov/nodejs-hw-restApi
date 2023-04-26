const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error && req.method === "POST") {
      const invalidField = error.details[0].path[0];
      next(HttpError(400, `Missing required ${invalidField} field`));
    }
    if (error && req.method === "PUT") {
      next(HttpError(400, "missing fields"));
    }
    next();
  };

  return func;
};

module.exports = validateBody;
