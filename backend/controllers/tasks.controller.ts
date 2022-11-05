import { Response } from "express";
import { TasksService } from "../services/tasks";
import { AuthenticatedRequest } from "../utils/authorization.util";

const index = async (req: AuthenticatedRequest, res: Response) => {
  const result = await TasksService.indexTasks({ userId: req.authUser.id });
  return res.status(200).json({ result });
};

const create = async (req: AuthenticatedRequest, res: Response) => {
  const data = { ...req.body, userId: req.authUser.id };
  const result = await TasksService.createTask(data);
  if (result instanceof Error) {
    return res.status(400).json({ message: result.message });
  }
  return res.status(201).json({ result });
};

const show = async (req: AuthenticatedRequest, res: Response) => {
  const data = { id: req.params.id, userId: req.authUser.id };
  const result = await TasksService.showTask(data);
  if (result instanceof Error) {
    return res.status(404).json({ message: result.message });
  }
  return res.status(200).json({ result });
};

const update = async (req: AuthenticatedRequest, res: Response) => {
  const data = { ...req.body, userId: req.authUser.id, id: req.params.id };
  const result = await TasksService.updateTask(data);
  if (result instanceof Error) {
    return res.status(404).json({ message: result.message });
  }
  return res.status(200).json({ result });
};

const destroy = async (req: AuthenticatedRequest, res: Response) => {
  const data = { id: req.params.id, userId: req.authUser.id };
  const result = await TasksService.destroyTask(data);
  if (result instanceof Error) {
    return res.status(400).json({ message: result.message });
  }
  return res.status(204).send();
};

export const TasksController = {
  index,
  create,
  show,
  update,
  destroy,
};
