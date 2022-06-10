import jwt from "jsonwebtoken";
import { Fail } from "../utils/exception";
import { jwtSecurity } from "../utils/config";
import type { ParameterizedContext, Next } from "koa";

const jwtAuth = async (ctx: ParameterizedContext, next: Next) => {
  const authorization = ctx.header?.authorization;
  const token = authorization?.split(" ")[1] || "";
  try {
    const decode = jwt.verify(token, jwtSecurity.secretKey);
    ctx.auth = decode;
  } catch (error) {
    ctx.response.status = 401;
    throw new Fail("Token 失效");
  }
  await next();
};

export default jwtAuth;
