import { Router } from "express";
import { ProjectsController } from "../controllers/projects.controller";
import { authenticatedMiddleware } from "../middleware/authenticated.middleware";

export const projectsRoutes = Router();

projectsRoutes.get("/projects", authenticatedMiddleware, ProjectsController.index);
projectsRoutes.post("/projects/", authenticatedMiddleware, ProjectsController.create);
projectsRoutes.get("/projects/:id", authenticatedMiddleware, ProjectsController.show);
projectsRoutes.put("/projects/:id", authenticatedMiddleware, ProjectsController.update);
projectsRoutes.delete("/projects/:id", authenticatedMiddleware, ProjectsController.destroy);
