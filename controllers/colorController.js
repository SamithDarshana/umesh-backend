const Color = require("../models/colorModel");
const asyncHandler = require("express-async-handler");
const validateMongoId = require("../utils/validateMongoDbId");

// Create a Color
const createColor = asyncHandler(async (req, res) => {
  try {
    const newColor = await Color.create(req.body);
    res.json(newColor);
  } catch (error) {
    throw new Error(error);
  }
});

// Update a Color
const updateColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);
  try {
    const updatedColor = await Color.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedColor) throw new Error("Color does not exists!");
    res.json(updatedColor);
  } catch (error) {
    throw new Error(error);
  }
});

// Delete a Color
const deleteColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);
  try {
    const deletedColor = await Color.findByIdAndDelete(id);
    if (!deletedColor) throw new Error("Color does not exists!");
    res.json(deletedColor);
  } catch (error) {
    throw new Error(error);
  }
});

// Get a Color
const getColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);

  try {
    const color = await Color.findById(id);
    if (!color) throw new Error("Color does not exists!");
    res.json(color);
  } catch (error) {
    throw new Error(error);
  }
});

// Get all Colors
const getAllColors = asyncHandler(async (req, res) => {
  try {
    const allColors = await Color.find();
    res.json(allColors);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createColor,
  updateColor,
  deleteColor,
  getColor,
  getAllColors,
};