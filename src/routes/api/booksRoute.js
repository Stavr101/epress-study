const express = require("express");
const router = express.Router();

// const booksService = require("../models/books");
// const ctrl = require("../../controllers/crudController");

const createRepositories = require("../models/jsonRepository");

router.get("/", ctrl.getAll(booksService));
router.get("/:id", ctrl.getById(booksService));
router.post("/", ctrl.add(booksService));
router.put("/:id", ctrl.updateById(booksService));
router.delete("/:id", ctrl.deleteById(booksService));

module.exports = router;
