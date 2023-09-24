const userService = require("../services/user.service");

const registerController = async (req, res) => {
  try {
    const user = await userService.registerService(req.body);
    if (user.error) {
      res.status(user.status).json({ error: user.error });
    }
    else {
      res.json({ message: "Register User", data: user });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
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
