import { jwtSecurity } from "./config";
import jwt from "jsonwebtoken";

export const generateToken = (uid: number) => {
  return jwt.sign({ uid }, jwtSecurity.secretKey, {
    expiresIn: jwtSecurity.expiresIn,
  });
};
