const contactsOperations = require("../../models/contacts");
const { HttpError } = require("../../helpers");
const updateContactById = async (req, res, next) => {
  const { contactId = id } = req.params;

  const result = await contactsOperations.updateContact(contactId, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};
module.exports = updateContactById;
