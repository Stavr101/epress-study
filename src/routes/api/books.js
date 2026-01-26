const express = require("express");
const booksModel = require("../models/modelsBooks");
const { HttpError } = require("../../../helpers");
// const { HttpError } = require("../../../helpers/index");
const Joi = require("joi");
const router = express.Router();

const addSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
});

router.get("/", async (req, resp, next) => {
  try {
    const books = await booksModel.getAll();
    resp.json(books);
  } catch (error) {
    next(error);
    // resp.status(500).json({ message: "Server error" });
  }
});

router.get("/:id", async (req, resp, next) => {
  const { id } = req.params;
  try {
    const result = await booksModel.getById(id);

    if (!result) {
      throw HttpError(404, "Not found");
      // const error = new Error("Not found");
      // error.status(404);
      // throw error;
      // return resp.status(404).json({ message: "Not found" });
    }
    resp.json(result);
  } catch (error) {
    next(error);
    const { status = 500, message = "Server error" } = error;
    resp.status(status).json({ message });
  }
});

router.post("/", async (req, resp, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const result = await booksModel.add(req.body);
    resp.status(201).json(result);
    if (!result) {
      throw HttpError(404, "Not found");
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, resp, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const { id } = req.params;
    const result = await booksModel.updateById(id, req.body);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    resp.json(result);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, resp, next) => {
  try {
    const { id } = req.params;
    const result = await booksModel.deleteById(id);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    resp.json({
      message: "Delete success",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
