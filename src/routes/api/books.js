const express = require("express");
const {
  getAll,
  getById,
  addBook,
  deleteById,
  updateById,
} = require("../../../controllers");

const router = express.Router();

router.get("/", getAll);

router.get("/:id", getById);

router.post("/", addBook);

router.put("/:id", updateById);

router.delete("/:id", deleteById);

module.exports = router;
