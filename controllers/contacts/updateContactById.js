const { Contact } = require("../../models/contact");
const { HttpError } = require("../../helpers");
const updateContactById = async (req, res) => {
  const { contactId } = req.params;
  const { _id: userId } = req.user;
  const result = await Contact.findOneAndUpdate(
    { _id: contactId, owner: userId },
    req.body,
    { new: true }
  );
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};
module.exports = updateContactById;
