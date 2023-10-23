const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const passwordHash = await bcrypt.hash(password, salt);
  return passwordHash;
};

const comparePassword = async (loggedPassword, userPassword) => {
  const isValid = await bcrypt.compare(loggedPassword, userPassword);
  return isValid;
};

module.exports = { hashPassword, comparePassword };
