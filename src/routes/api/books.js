const express = require("express");
const booksModel = require("../models/modelsBooks");

const router = express.Router();

router.get("/", async (req, resp) => {
  const books = await booksModel.getAll();
  resp.json(books);
});

router.get("/:id", async (req, resp) => {
  const { id } = req.params;

  const result = await booksModel.getById(id);
  resp.json(result);
});

router.post("/", (req, resp) => {
  resp.json(books);
});

router.put("/:id", (req, resp) => {
  resp.json(books);
});

router.delete("/:id", (req, resp) => {
  resp.json(books);
});

module.exports = router;
