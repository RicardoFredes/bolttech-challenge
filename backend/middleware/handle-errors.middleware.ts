import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export const handleErrorsMiddleware = async (
  error: ErrorRequestHandler,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error) {
    console.log(error);
    return res.status(500).json({ message: "Server internal error", stack: error });
  }
  next();
};
