const express = require("express");
const {
  createUser,
  loginUser,
  getAllUsers,
  getAUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logoutUser,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWishlist,
  saveAddress,
  userCart,
  getUserCart,
  emptyCart,
  createOrder,
  getOrderByUser,
  verifyUser,
  removeProductFromcart,
  updateQuantityFromCart,
  getAllOrders,
  getMyOrders,
  updateOrder,
} = require("../controllers/userController");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.post("/cart", authMiddleware, userCart);
router.put("/reset-password/:token", resetPassword);
router.put("/password", authMiddleware, updatePassword);
router.post("/login", loginUser);
router.post("/admin-login", loginAdmin);
router.post("/cart/create-order", authMiddleware, createOrder);
router.get("/all-users", getAllUsers);
router.put("/update-user", authMiddleware, updateUser);
router.put("/save-address", authMiddleware, saveAddress);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logoutUser);
router.get("/wishlist", authMiddleware, getWishlist);
router.get("/cart", authMiddleware, getUserCart);
router.get("/verify", authMiddleware, isAdmin, verifyUser);
router.get("/all-orders", authMiddleware, isAdmin, getAllOrders);
router.get("/getmyorders", authMiddleware, getMyOrders);
router.post("/getorderbyuser", authMiddleware, getOrderByUser);
router.put("/updateOrder/:id", authMiddleware, isAdmin, updateOrder);
router.delete("/empty-cart", authMiddleware, emptyCart);
router.delete(
  "/delete-product-cart/:cartItemId",
  authMiddleware,
  removeProductFromcart
);
router.put("/update-quantity", authMiddleware, updateQuantityFromCart);
router.get("/:id", authMiddleware, isAdmin, getAUser);
router.delete("/:id", deleteUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
