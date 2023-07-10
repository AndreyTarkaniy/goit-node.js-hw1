import fs from "fs/promises";
import { nanoid } from "nanoid";
import path from "path";

const contactsPath = path.resolve("db", "contacts.json");
console.log(contactsPath);

export const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

export const getContactById = async contactId => {
  const allContacts = await listContacts();
  const oneMovie = allContacts.find(({ id }) => id === contactId);
  return oneMovie || null;
};

export const addContact = async (name, email, phone) => {
  const allContacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  allContacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return newContact;
  // return allContacts; - поверне масив з доданим контатом
};

// listContacts();

// const contactsService = { listContacts };
// module.exports = contactsService;
export default { listContacts, getContactById, addContact };
