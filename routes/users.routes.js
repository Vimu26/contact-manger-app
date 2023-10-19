const express = require("express");

const router = express.Router();
module.exports = router;
const userController = require("../controllers/user.controller");
const validateToken = require("../middleware/validateToken");

router.get("/", userController.getAllUserController);
router.post("/register", userController.registerController);
router.post("/login", userController.loginUserController);
router.get(
  "/current",
  validateToken.validateToken,
  userController.currentUserController
);
router.patch("/:id", userController.updateUserControllersFunction);
router.delete("/:id", validateToken.validateToken,userController.deleteUserControllersFunction);
