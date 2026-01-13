const path = require("path");
const createRepository = require("./jsonRepository");
const contactsPath = path.join(__dirname, "../../contacts/contacts.json");
module.exports = createRepository(contactsPath);
