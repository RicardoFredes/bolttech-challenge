import { Request } from "express";
import jwt, { Secret } from "jsonwebtoken";

export const SECRET_KEY: Secret = process.env.SECRET_KEY || "secret";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
}

export interface AuthenticatedRequest extends Request {
  authUser: AuthUser;
}

export const tokenGenerator = (user: AuthUser) => {
  const expiresIn = "2 days";
  const signInUser = { id: user.id, name: user.name, email: user.name };
  return jwt.sign(signInUser, SECRET_KEY, { expiresIn });
};

export const tokenDecoder = (token: string): AuthUser => {
  const decode = jwt.verify(token, SECRET_KEY);
  if (typeof decode !== "object") throw new Error("Invalid token");
  return {
    id: decode.id,
    name: decode.name,
    email: decode.email,
  };
};
