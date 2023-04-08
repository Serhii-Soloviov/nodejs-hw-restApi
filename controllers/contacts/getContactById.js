const contactsOperations = require("../../models/contacts");
const { HttpError } = require("../../helpers");

const getContactById = async (req, res, next) => {
  const { contactId = id } = req.params;
  const contact = await contactsOperations.getContactById(contactId);
  if (!contact) {
    throw HttpError(404, "Not found");
  }
  res.json(contact);
};
module.exports = getContactById;
