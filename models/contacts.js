const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "./contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const list = JSON.parse(data);
  return list;
};

const getContactById = async (id) => {
  const list = await listContacts();
  const contact = list.find((item) => item.id === id);
  if (!contact) {
    return null;
  }
  return contact;
};

const removeContact = async (id) => {
  const list = await listContacts();
  const idx = list.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  const newContact = list.filter((_, index) => index !== idx);
  await fs.writeFile(contactsPath, JSON.stringify(newContact));
  return list[idx];
};

const addContact = async (body) => {
  const list = await listContacts();
  const newContact = { id: v4(), ...body };
  list.push(newContact);

  await fs.writeFile(contactsPath, JSON.stringify(list));
  return newContact;
};

const updateContact = async (id, body) => {
  const list = await listContacts();
  const idx = list.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  list[idx] = { id, ...body };
  await fs.writeFile(contactsPath, JSON.stringify(list));
  return list[idx];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
