const path = require("path");
const createRepository = require("../models/jsonRepository");
const contactsPath = path.join(__dirname, "../../contacts/contacts.json");
module.exports = createRepository(contactsPath);
