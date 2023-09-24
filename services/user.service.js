const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");

module.exports.registerService = async (details) => {
  try {
    if (details.user_name || details.email || details.password) {
      const email = await userModel.findOne({ email: details.email });
      const userName = await userModel.findOne({
        user_name: details.user_name,
      });
      if (email) {
        return {
            error: "Email already exists",
            status: 400,
          };
      }
      if (userName) {
    return {
            error: "Username already exists",
            status: 400,
          };
      }

      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const passwordHash = await bcrypt.hash(details.password, salt);

      const user = new userModel({
        user_name: details.user_name,
        email: details.email,
        password: passwordHash,
      });
      await user.save();
      return user;
    } else {
      throw new Error("All Required Fields");
    }
  } catch (error) {
    return {
        error: error.message,
        status: 500,
      };
  }
};
