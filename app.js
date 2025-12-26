const express = require("express");
const cors = require("cors");

const app = express(); //web-server///
// const books = require("./books/books");
const contacts = require("./data/contacts.json");
const apiBooks = require("./routes/api/books");

app.use(cors());

app.get("/", (req, resp) => {
  resp.json("<h2>Home page</h2>");
});

app.get("/api/contacts/", (req, resp) => {
  // console.log(contacts);
  resp.json(contacts);
});

app.get("/api/contacts/:id", () => {});

app.get("/api/books/", async (req, resp) => {
  const result = await apiBooks.getAll();

  resp.json(result);
});

app.get("/api/books/:id", async (req, resp) => {
  const { id } = req.params;
  // console.log("id", id);

  const result = await apiBooks.getById(id);
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
  console.log("Server running ot the port 3000");
});
