import { AppDataSource } from "../../database";
import { Task } from "../../entities/task.entity";
import { entityValidate } from "../../utils/entity-validate.util";

interface CreateTask {
  description: string;
  projectId: string;
  userId: string;
}

export const createTask = async ({ description, projectId, userId }: CreateTask) => {
  if (!userId) return new Error("userId is required");
  if (!projectId) return new Error("projectId is required");
  const task = AppDataSource.getRepository(Task).create({ description, projectId, userId });
  const error = await entityValidate(task);
  if (error) return new Error(error);
  await AppDataSource.getRepository(Task).save(task);
  return {
    id: task.id,
    projectId: task.projectId,
    createTask: task.createdAt,
    done: task.done,
  };
};
