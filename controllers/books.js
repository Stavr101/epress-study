const booksModel = require("../src/routes/models/modelsBooks");
const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, resp) => {
  const books = await booksModel.getAll();
  resp.json(books);
};

const getById = async (req, resp) => {
  const { id } = req.params;
  const result = await booksModel.getById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  resp.json(result);
};

const addBook = async (req, resp) => {
  const result = await booksModel.add(req.body);
  resp.status(201).json(result);
  if (!result) {
    throw HttpError(404, "Not found");
  }
};

const updateById = async (req, resp) => {
  const { id } = req.params;
  const result = await booksModel.updateById(id, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  resp.json(result);
};

const deleteById = async (req, resp) => {
  const { id } = req.params;
  const result = await booksModel.deleteById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  resp.json({
    message: "Delete success",
  });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  addBook: ctrlWrapper(addBook),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),
};
