const Brand = require("../models/brandModel");
const asyncHandler = require("express-async-handler");
const validateMongoId = require("../utils/validateMongoDbId");

// Create a Brand
const createBrand = asyncHandler(async (req, res) => {
  try {
    const newBrand = await Brand.create(req.body);
    res.json(newBrand);
  } catch (error) {
    throw new Error(error);
  }
});

// Update a Brand
const updateBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);
  try {
    const updatedBrand = await Brand.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBrand) throw new Error("Brand does not exists!");
    res.json(updatedBrand);
  } catch (error) {
    throw new Error(error);
  }
});

// Delete a Brand
const deleteBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);
  try {
    const deletedBrand = await Brand.findByIdAndDelete(id);
    if (!deletedBrand) throw new Error("Brand does not exists!");
    res.json(deletedBrand);
  } catch (error) {
    throw new Error(error);
  }
});

// Get a Brand
const getBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);

  try {
    const brand = await Brand.findById(id);
    if (!brand) throw new Error("Brand does not exists!");
    res.json(brand);
  } catch (error) {
    throw new Error(error);
  }
});

// Get all Brands
const getAllBrands = asyncHandler(async (req, res) => {
  try {
    const allBrands = await Brand.find();
    res.json(allBrands);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrand,
  getAllBrands,
};