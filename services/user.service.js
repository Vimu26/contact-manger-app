const userModel = require("../models/user.model");
const passwordService = require("../services/password.service");
const tokenService = require("../services/token.service");
const bcrypt = require("bcrypt");

module.exports.registerService = async (details) => {
  const hashPassword = await passwordService.hashPassword(details.password);
  const user = new userModel({
    user_name: details.user_name,
    email: details.email,
    password: hashPassword,
  });
  await user.save();
  return user;
};

module.exports.loginService = async (data) => {
  const userExist = await userModel.findOne({ email: data.email });
  if (!userExist) {
    return {
      error: "User Not Found",
      status: 400,
    };
  }
  //compare the email and password
  const isValid = await passwordService.comparePassword(
    data.password,
    userExist.password
  );
  if (userExist && isValid) {
    const accessToken = await tokenService.generateToken(userExist);
    return accessToken;
  } else {
    return {
      error: "Invalid Credentials",
      status: 401,
    };
  }
};

module.exports.getAllUsers = async () => {
  return await userModel.find();
};

module.exports.updateUser = async (id, details) => {
  return await userModel.findByIdAndUpdate(id, details, { new: true });
};

module.exports.deleteUser = async (id) => {
  return userDetailsModel.findByIdAndDelete(id);
};
