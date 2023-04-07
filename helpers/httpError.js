const HttpError = (status, message) => {
  const error = new Error(message);
  error.code = status;
  return error;
};

module.exports = HttpError;
