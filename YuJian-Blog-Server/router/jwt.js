const jwt = require("express-jwt");
const { PRIVATE_KEY } = require("../utils/constant");

module.exports = jwt({
  secret: PRIVATE_KEY,
  // // 需要指定一个加密算法
  // algorithms: ['HS256'],
  credentialsRequired: true,
}).unless({
  path: ["/", "/user/login"],
});

// 校验Token