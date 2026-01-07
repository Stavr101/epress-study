const express = require("express");
const cors = require("cors");
require("colors");

const app = express(); //web-server///
// const books = require("./books/books");

// const contacts = require("./data/contacts.json");
// const apiBooks = require("./routes/api/books");
const contactsModel = require("./routes/models/modelsContacts");
const booksModel = require("./routes/models/modelsBooks");

app.use(cors());

app.get("/", (req, resp) => {
  resp.json("<h2>Home page</h2>");
});

app.get("/api/contacts/", async (req, resp) => {
  const contacts = await contactsModel.getAll();
  resp.json(contacts);
});

app.get("/api/contacts/:id", () => {});

app.get("/api/books/", async (req, resp) => {
  const books = await booksModel.getAll();

  resp.json(books);
});

app.get("/api/books/:id", async (req, resp) => {
  const { id } = req.params;

  const result = await booksModel.getById(id);
  resp.json(result);
});

app.post("/api/books", (req, resp) => {
  resp.json(books);
});

app.put("/api/books/:id", (req, resp) => {
  resp.json(books);
});

app.delete("/api/books/:id", (req, resp) => {
  resp.json(books);
});

app.listen(3000, () => {
  console.log(`Server running ot the port 3000`.cyan.bold.italic);
});
