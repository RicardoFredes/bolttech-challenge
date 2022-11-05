import { Response } from "express";
import { ProjectsService } from "../services/projects";
import { AuthenticatedRequest } from "../utils/authorization.util";

const index = async (req: AuthenticatedRequest, res: Response) => {
  const result = await ProjectsService.indexProjects({ userId: req.authUser.id });
  return res.status(200).json({ result });
};

const create = async (req: AuthenticatedRequest, res: Response) => {
  const data = { ...req.body, userId: req.authUser.id };
  const result = await ProjectsService.createProject(data);
  if (result instanceof Error) {
    return res.status(400).json({ message: result.message });
  }
  return res.status(201).json({ result });
};

const show = async (req: AuthenticatedRequest, res: Response) => {
  const data = { id: req.params.id, userId: req.authUser.id };
  const result = await ProjectsService.showProject(data);
  if (result instanceof Error) {
    return res.status(404).json({ message: result.message });
  }
  return res.status(200).json({ result });
};

const update = async (req: AuthenticatedRequest, res: Response) => {
  const data = { ...req.body, userId: req.authUser.id, id: req.params.id };
  const result = await ProjectsService.updateProject(data);
  if (result instanceof Error) {
    return res.status(404).json({ message: result.message });
  }
  return res.status(200).json({ result });
};

const destroy = async (req: AuthenticatedRequest, res: Response) => {
  const data = { id: req.params.id, userId: req.authUser.id };
  const result = await ProjectsService.destroyProject(data);
  if (result instanceof Error) {
    return res.status(400).json({ message: result.message });
  }
  return res.status(204).send();
};

export const ProjectsController = {
  index,
  create,
  show,
  update,
  destroy,
};
