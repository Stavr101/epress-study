const path = require("path");
const createRepository = require("./jsonRepository");
const booksPath = path.join(__dirname, "../../books/books.json");

module.exports = createRepository(booksPath);
