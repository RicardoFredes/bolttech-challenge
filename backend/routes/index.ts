import { Router } from "express";
import { projectsRoutes } from "./project.route";
import { tasksRoutes } from "./task.route";
import { usersRoutes } from "./users.route";

export const routes = Router();

routes.use(usersRoutes);
routes.use(projectsRoutes);
routes.use(tasksRoutes);
