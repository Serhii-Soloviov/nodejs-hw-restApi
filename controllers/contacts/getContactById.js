const { Contact } = require("../../models/contact");
const { HttpError } = require("../../helpers");

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id: userId } = req.user;
  const contact = await Contact.findOne({ _id: contactId, owner: userId });
  if (!contact) {
    throw HttpError(404, "Not found");
  }
  res.json(contact);
};
module.exports = getContactById;
