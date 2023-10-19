const userService = require("../services/user.service");

const getAllUserController = async (req, res) => {
  try {
    const user = await userService.getAllUsers();
    if (user.error) {
      res.json({ status: false, error: user.error });
    } else {
      res.json({
        status: true,
        message: "users found successfully",
        data: user,
      });
    }
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

const registerController = async (req, res) => {
  try {
    const user = await userService.registerService(req.body);
    if (user.error) {
      res.status(user.status).json({ error: user.error });
    } else {
      res.json({ message: "Register User", data: user });
    }
  } catch (err) {
    res.status(err.status).json({ error: err.error });
  }
};

const loginUserController = async (req, res) => {
  try {
    const user = await userService.loginService(req.body);
    if (user.error) {
      res.status(user.status).json({ error: user.error });
    } else {
      res.status(200).json({ message: "login Successful", data: user });
    }
  } catch (err) {
    res.status(err.status).json({ error: err.error });
  }
};

const currentUserController = async (req, res) => {
  res.json({ message: "Current User", data: req.user });
};

const updateUserControllersFunction = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.status(200).json({
      status: true,
      message: "user updated successfully",
      data: user,
    });
  } catch (err) {
    console.error("An error occurred", err.message);
    res.status(500).json({ status: false, message: err.message });
  }
};
const deleteUserControllersFunction = async (req, res) => {
  try {
    const deletedUser = await userService.deleteUser(req.params.id);
    res.status(200).json({
      status: true,
      message: "User Deleted Successfully",
      data: deletedUser,
    });
  } catch (err) {
    console.error("An error occurred", err.message);
    res.status(500).json({ status: false, message: err.message });
  }
};

module.exports = {
  registerController,
  loginUserController,
  currentUserController,
  getAllUserController,
  updateUserControllersFunction,
  deleteUserControllersFunction,
};
