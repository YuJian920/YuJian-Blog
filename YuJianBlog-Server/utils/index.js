const { jwtSecurity } = require("./config");
const jwt = require("jsonwebtoken");

const generateToken = (uid) => {
  return jwt.sign({ uid }, jwtSecurity.secretKey, {
    expiresIn: jwtSecurity.expiresIn,
  });
};

module.exports = { generateToken };
