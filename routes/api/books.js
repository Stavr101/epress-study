const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");
const booksPath = path.join(__dirname, "../../books/books.json");
console.log(booksPath);

const getAll = async () => {
  const data = await fs.readFile(booksPath);
  return JSON.parse(date);
};

const getById = async (id) => {
  const books = await getAll();
  const result = books.find((item) => item.id === id);
  return result || null;
};

const addBook = async (data) => {
  const books = await getAll();
  const newBook = {
    id: nanoid(),
    ...date,
  };
  books.push(newBook);
  await fs.writeFile(booksPath, JSON.stringify(books, 2, null));
  return newBook;
};

const updateById = async (id, data) => {
  const books = await getAll();
  const index = books.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }

  books[index] = { id, ...data };
  await fs.writeFile(booksPath, JSON.stringify(books, 2, null));
  return books[index];
};

const deleteById = async (id) => {
  const books = await getAll();
  const index = books.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = books.splice(index, 1);
  await fs.writeFile(booksPath, JSON.stringify(books, 2, null));
  return result;
};

module.exports = {
  getAll,
  getById,
  addBook,
  updateById,
  deleteById,
};
