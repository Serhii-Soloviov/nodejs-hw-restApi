const { HttpError } = require("../../helpers");
const { Contact } = require("../../models/contact");

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const { _id: userId } = req.user;

  if (!favorite && favorite !== false) {
    res.status(400).json({ message: "missing field favorite" });
  }

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
module.exports = updateStatusContact;
