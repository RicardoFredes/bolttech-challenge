import { NextFunction, Response } from "express";
import { AuthenticatedRequest, tokenDecoder } from "../utils/authorization.util";

export const authenticatedMiddleware = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token =
      req.headers["x-access-token"] ||
      req.body.token ||
      req.header("Authorization")?.replace("Bearer ", "");
    if (!token) return res.status(401).json({ auth: false, message: "No token provided." });
    req.authUser = tokenDecoder(token);
    next();
  } catch (error) {
    return res.status(400).json({ auth: false, message: "Failed to authenticate token." });
  }
};
