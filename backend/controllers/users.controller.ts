import { Request, Response } from "express";
import { UsersServices } from "../services/users";

const register = async (req: Request, res: Response) => {
  const result = await UsersServices.registerUser(req.body);
  if (result instanceof Error) {
    return res.status(400).json({ message: result.message });
  }
  res.status(201).json({ result });
};

const login = async (req: Request, res: Response) => {
  const result = await UsersServices.userLogin(req.body);
  if (result instanceof Error) {
    return res.status(400).json({ message: result.message });
  }
  res.json({ result });
};

export const UsersController = {
  register,
  login,
};
