const jwt = require("jsonwebtoken");

module.exports.generateToken = async (existingUser) => {
  const accessToken = jwt.sign(
    {
      sub: existingUser._id, //subject Claim
      iss: existingUser.user_name, // Issuer claim
      exp: Math.floor(Date.now() / 1000) + 30 * 60, // Expiration time in seconds (30 minutes)
      aud: "System Login", // Audience claim
      iat: Math.floor(Date.now() / 1000), // Issued At claim
      existingUser: {
        email: existingUser.email,
      },
      userExist: {
        email: existingUser.email,
      },
    },
    process.env.ACCESS_TOKEN_SECRET
  );
  return accessToken;
};
