const express = require("express");
const cors = require("cors");
require("colors");

const app = express(); //web-server///

const booksRouter = require("./src/routes/api/books");
const contactsRouter = require("./src/routes/api/contacts");

app.use(cors());
app.use(express.json());

app.use("/api/books", booksRouter);
app.use("/api/contacts", contactsRouter);
app.get("/", (req, resp) => {
  resp.json("<h2>Home page</h2>");
});

app.use((req, resp) => {
  resp.status(404).json({
    message: "Not found",
  });
});

app.use((err, req, resp, next) => {
  const { status = 500, message = "Server error" } = err;
  resp.status(status).json({ message });
});

app.listen(3000, () => {
  console.log(`Server running ot the port 3000`.cyan.bold.italic);
});
