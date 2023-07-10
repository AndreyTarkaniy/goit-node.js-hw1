import fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve("db", "contacts.json");
console.log(contactsPath);

export const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

export const getContactById = async contactId => {
  const allMovies = await listContacts();
  const oneMovie = allMovies.find(({ id }) => id === contactId);
  return oneMovie || null;
};
// listContacts();

// const contactsService = { listContacts };
// module.exports = contactsService;
export default { listContacts, getContactById };
