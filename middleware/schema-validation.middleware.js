const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
// const userSchema = require("../schema/userSchema.json");
const us = require ("../schema/user.schema")
userSchema = us.us;

const validateUser = ajv.compile(userSchema);

const usersSchemaValidation = (req, res, next) => {
  const valid = validateUser(req.body);
  if (!valid) {
    return res.status(400).json({
      status: false,
      message: "Validation Error",
      error: validateUser.errors,
    });
  }
  next();
};

module.exports = {
  usersSchemaValidation,
};
