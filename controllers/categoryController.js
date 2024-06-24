const Category = require("../models/categoryModel");
const asyncHandler = require("express-async-handler");
const validateMongoId = require("../utils/validateMongoDbId");

// Create a Category
const createCategory = asyncHandler(async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.json(newCategory);
  } catch (error) {
    throw new Error(error);
  }
});

// Update a Category
const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedCategory) throw new Error("Category does not exists!"); // Valid mongoID but doesn't exists
    res.json(updatedCategory);
  } catch (error) {
    throw new Error(error);
  }
});

// Delete a Category
const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);
  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    if (!deletedCategory) throw new Error("Category does not exists!");
    res.json(deletedCategory);
  } catch (error) {
    throw new Error(error);
  }
});

// Get a Category
const getCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);

  try {
    const category = await Category.findById(id);
    if (!category) throw new Error("Category does not exists!");
    res.json(category);
  } catch (error) {
    throw new Error(error);
  }
});

// Get all Categories
const getAllCategories = asyncHandler(async (req, res) => {
  try {
    const allCategories = await Category.find();
    res.json(allCategories);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getAllCategories,
};