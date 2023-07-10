// console.log("hi Fras,dear friend,mother fucker");
// import argv from "yargs";
// const argv = require("yargs").argv;

import contactsService from "./contacts.js";
// const contactsService = require("constants.js");

const invokeActions = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      return console.log(allContacts);
    case "get":
      const contact = await contactsService.getContactById(id);
      return console.log(contact);
    case "add":
      const newContact = await contactsService.addContact(name, email, phone);
      return console.log(newContact);
    default:
      console.log("neponyatka");
  }
};
// invokeActions({ action: "list" });
// invokeActions({ action: "get", id: "AeHIrLTr6JkxGE6SN-0Rw" });

// invokeActions(argv);
