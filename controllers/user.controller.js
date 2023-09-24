const userService = require("../services/user.service");

const registerController = async (req, res) => {
  try {
    const user = await userService.registerService(req.body);
    if (user) {
      res.json({ message: "Register User", data: user });
    }
  } catch (err) {
    console.log(err);
  }
};

const loginUserController = async (req, res) => {
  res.json({ message: "Login User" });
};

const currentUserController = async (req, res) => {
  res.json({ message: "Current User" });
};

module.exports = {
  registerController,
  loginUserController,
  currentUserController,
};
