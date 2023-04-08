const addContact = require("./addContact");
const getAllContacts = require("./getAllContacts");
const getContactById = require("./getContactById");
const removeContactById = require("./removeContactById");
const updateContactById = require("./updateContactById");

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  removeContactById,
  updateContactById,
};
