const jwt = require("jsonwebtoken");

module.exports.validateToken = async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader?.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ data: err });
      } else {
        // If token is valid, you can optionally store the decoded data in the request for later use
        req.user = decoded;
        next(); // Call next to pass control to the next middleware or route handler
      }
    });
  } else {
    res.status(404).json({ data: "Token Invalid" }); // If no token is provided,
  }
};

// express bearer
