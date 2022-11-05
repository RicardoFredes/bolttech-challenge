import { Router } from "express";
import { TasksController } from "../controllers/tasks.controller";
import { authenticatedMiddleware } from "../middleware/authenticated.middleware";

export const tasksRoutes = Router();

tasksRoutes.get("/tasks", authenticatedMiddleware, TasksController.index);
tasksRoutes.post("/tasks/", authenticatedMiddleware, TasksController.create);
tasksRoutes.get("/tasks/:id", authenticatedMiddleware, TasksController.show);
tasksRoutes.put("/tasks/:id", authenticatedMiddleware, TasksController.update);
tasksRoutes.delete("/tasks/:id", authenticatedMiddleware, TasksController.destroy);
