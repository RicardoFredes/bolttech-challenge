import { AppDataSource } from "../../database";
import { Task } from "../../entities/task.entity";
import { entityValidate } from "../../utils/entity-validate.util";

interface CreateTask {
  description: string;
  endsAt: Date;
  projectId: string;
  userId: string;
}

export const createTask = async ({ description, endsAt, projectId, userId }: CreateTask) => {
  if (!userId) return new Error("userId is required");
  if (!projectId) return new Error("projectId is required");
  const data = { description, endsAt: new Date(endsAt), projectId, userId };
  const task = AppDataSource.getRepository(Task).create(data);
  const error = await entityValidate(task);
  if (error) return new Error(error);
  await AppDataSource.getRepository(Task).save(task);
  return {
    id: task.id,
    projectId: task.projectId,
    createTask: task.createdAt,
    endsAt: task.endsAt,
    done: task.done,
  };
};
