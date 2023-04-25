const {Contact} = require("../../models/contact");
const { HttpError } = require("../../helpers");

const getContactById = async (req, res, next) => {
  const { contactId = id } = req.params;
  const contact = await Contact.findById(contactId);
  if (!contact) {
    throw HttpError(404, "Not found");
  }
  res.json(contact);
};
module.exports = getContactById;
