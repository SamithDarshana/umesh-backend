const Enquiry = require("../models/enquiryModel");
const asyncHandler = require("express-async-handler");
const validateMongoId = require("../utils/validateMongoDbId");

// Create a Enquiry
const createEnquiry = asyncHandler(async (req, res) => {
  try {
    const newEnquiry = await Enquiry.create(req.body);
    res.json(newEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

// Update a Enquiry
const updateEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);
  try {
    const updatedEnquiry = await Enquiry.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedEnquiry) throw new Error("Enquiry does not exists!");
    res.json(updatedEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

// Delete a Enquiry
const deleteEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);
  try {
    const deletedEnquiry = await Enquiry.findByIdAndDelete(id);
    if (!deletedEnquiry) throw new Error("Enquiry does not exists!");
    res.json(deletedEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

// Get a Enquiry
const getEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);

  try {
    const enquiry = await Enquiry.findById(id);
    if (!enquiry) throw new Error("Enquiry does not exists!");
    res.json(enquiry);
  } catch (error) {
    throw new Error(error);
  }
});

// Get all Enquiries
const getAllEnquiries = asyncHandler(async (req, res) => {
  try {
    const allEnquiries = await Enquiry.find();
    res.json(allEnquiries);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createEnquiry,
  updateEnquiry,
  deleteEnquiry,
  getEnquiry,
  getAllEnquiries,
};
