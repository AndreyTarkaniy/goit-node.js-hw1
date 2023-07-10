import fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve("db", "contacts.json");
console.log(contactsPath);

export const listContacts = async () => {
  const data = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(data);
};
// listContacts();

// const contactsService = { listContacts };
// module.exports = contactsService;
export default { listContacts };
