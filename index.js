// console.log("hi Fras,dear friend,mother fucker");
// const argv = require("yargs").argv;

import contactsService from "./contacts.js";
// const contactsService = require("constants.js");

const invokeActions = async ({ action }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      return console.log(allContacts);
    default:
      console.log("neponyatka");
  }
};
invokeActions({ action: "list" });
