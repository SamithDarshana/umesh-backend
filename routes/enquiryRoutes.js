const express = require("express");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const {
  createEnquiry,
  updateEnquiry,
  deleteEnquiry,
  getEnquiry,
  getAllEnquiries,
} = require("../controllers/enquiryController");

const router = express.Router();

router.post("/", createEnquiry);
router.put("/:id", authMiddleware, isAdmin, updateEnquiry);
router.delete("/:id", authMiddleware, isAdmin, deleteEnquiry);
router.get("/:id", authMiddleware, isAdmin, getEnquiry);
router.get("/", authMiddleware, isAdmin, getAllEnquiries);

module.exports = router;
