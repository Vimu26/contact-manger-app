const ajvFormatService = require("../services/ajv.json.format.service");
const userSchema = require("../schema/user.schema");

const validateUser = ajvFormatService.ajv.compile(userSchema.registerUser);
const usersRegisterSchemaValidation = (req, res, next) => {
  const isValid = validateUser(req.body);
  if (!isValid) {
    return res.status(400).json({
      status: false,
      message: "Error Occurs In Validation of the request body",
      error: validateUser.errors,
    });
  }
  next();
};

const validateLoginUser = ajvFormatService.ajv.compile(userSchema.loginUser);
const usersLoginSchemaValidation = (req, res, next) => {
  const isValid = validateLoginUser(req.body);
  if (!isValid) {
    return res.status(400).json({
      status: false,
      message: "Error Occurs In Validation of the request body",
      error: validateLoginUser.errors,
    });
  }
  next();
};

module.exports = {
  usersRegisterSchemaValidation,
  usersLoginSchemaValidation,
};
