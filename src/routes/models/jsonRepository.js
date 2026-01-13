// const { log } = require("console");
const fs = require("fs/promises");
const { nanoId } = require("nanoid");

const createRepositories = (filePath) => {
  const getAll = async () => {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  };

  const getById = async (id) => {
    console.log("id", id);

    const data = await getAll();
    const result = data.find((item) => String(item.id) === String(id));
    return result || null;
  };
  const add = async (data) => {
    const items = await getAll();
    const newItem = {
      id: nanoId(),
      ...data,
    };
    items.push(newItem);
    await fs.writeFile(filePath, JSON.stringify(items, null, 2));
    return newItem;
  };
  const updateById = async (id) => {
    const data = await getAll();
    const index = data.findIndex((item) => item.id === id);
    if (index === -1) {
      return null;
    }
    data[index] = { id, ...data };
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    return data[index];
  };

  const deleteById = async (id) => {
    const date = getAll();
    const index = date.findIndex((item) => item.id === id);
    if (index === -1) {
      return null;
    }
    const [result] = date.splice(index, 1);
    fs.writeFile(filePath, JSON.stringify(date, null, 2));
    return result;
  };

  return {
    getAll,
    getById,
    add,
    updateById,
    deleteById,
  };
};
module.exports = createRepositories;
