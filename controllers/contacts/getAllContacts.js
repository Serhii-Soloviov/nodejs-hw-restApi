const { Contact } = require("../../models/contact");

const getAllContacts = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const contacts = await Contact.find({ owner }, null, {
    skip,
    limit,
  }).populate("owner", "email");
  res.json(contacts);
};
module.exports = getAllContacts;
