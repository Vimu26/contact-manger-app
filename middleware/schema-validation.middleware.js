const ajvFormat = require("../services/ajv.json.format.service");
const userSchema = require("../schema/user.schema");

const validateUser = ajvFormat.ajv.compile(userSchema.us);

const usersSchemaValidation = (req, res, next) => {
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

module.exports = {
  usersSchemaValidation,
};
