const jwt = require("jsonwebtoken");
const { Fail } = require("../utils/exception");
const { secretKey } = require("../utils/config").jwtSecurity;

const jwtAuth = async (ctx, next) => {
  const authorization = ctx.header?.authorization;
  const token = authorization?.split(" ")[1];
  try {
    const decode = jwt.verify(token, secretKey);
    ctx.auth = decode;
  } catch (error) {
    ctx.response.status = 401;
    throw new Fail("Token 失效");
  }
  await next();
};

module.exports = jwtAuth;
