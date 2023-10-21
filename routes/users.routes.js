const express = require("express");

const router = express.Router();
module.exports = router;
const userController = require("../controllers/user.controller");
const validateToken = require("../middleware/validateToken");
const schemaValidation = require("../middleware/schema-validation.middleware");

router.get("/", userController.getAllUserController);
router.post(
  "/register",
  schemaValidation.usersLoginSchemaValidation,
  userController.registerController,
);
router.post(
  "/login",
  schemaValidation.usersLoginSchemaValidation,
  userController.loginUserController,
);
router.get(
  "/profile",
  validateToken.validateToken,
  userController.currentUserController,
);
router.patch("/:id", userController.updateUserControllersFunction);
router.delete(
  "/:id",
  validateToken.validateToken,
  userController.deleteUserControllersFunction,
);
