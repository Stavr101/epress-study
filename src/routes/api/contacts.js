const express = require("express");
const contactsModel = require("../models/modelsContacts");

const router = express.Router();

router.get("/", async (req, resp) => {
  const contacts = await contactsModel.getAll();
  resp.json(contacts);
});

router.get("/:id", async (req, resp) => {
  const { id } = req.params;
  const result = await contactsModel.getById(id);
  resp.json(result);
});

module.exports = router;
