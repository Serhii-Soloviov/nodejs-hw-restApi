const { Contact } = require("../../models/contact");
const { HttpError } = require("../../helpers");

const removeContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id: userId } = req.user;
  const result = await Contact.findOneAndRemove({
    _id: contactId,
    owner: userId,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).send({ message: "Contact deleted" });
};
module.exports = removeContactById;
