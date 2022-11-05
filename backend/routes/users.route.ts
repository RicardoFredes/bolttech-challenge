import { Router } from "express";
import { UsersController } from "../controllers/users.controller";

export const usersRoutes = Router();

usersRoutes.post("/register", UsersController.register);
usersRoutes.post("/login", UsersController.login);
