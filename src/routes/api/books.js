const express = require("express");
const {
  getAll,
  getById,
  addBook,
  deleteById,
  updateById,
} = require("../../../controllers");
const validateBody = require("../../../middlewares/validateBody");
const { addSchema } = require("../../../schemas/books");

const router = express.Router();

router.get("/", getAll);

router.get("/:id", getById);

router.post("/", validateBody(addSchema), addBook);

router.put("/:id", validateBody(addSchema), updateById);

router.delete("/:id", deleteById);

module.exports = router;
