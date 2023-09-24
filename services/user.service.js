const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

module.exports.loginService = async (data) => {
  try {
    if (data.email || data.password) {
      const userExist = await userModel.findOne({ email: data.email });
      if(!userExist) {
        return {
            error: "No User Found",
            status: 400,
          };
      }
      //compare the email and password
      if(userExist && (await bcrypt.compare(data.password, userExist.password))){
        const accessToken = await jwt.sign({
            userExist : {
                user_name : userExist.user_name,
                email : userExist.email,
                id : userExist.id,
            }
        },process.env.ACCESS_TOKEN_SECRET , {expiresIn : "1m"});
        return accessToken
      }

    } else {
      return {
        error: "Fields are Required",
        status: 500,
      };
    }
  } catch (error) { 
    console.log(error.message);
    return {
      error: error.message,
      status: 500,
    };
  }
};
