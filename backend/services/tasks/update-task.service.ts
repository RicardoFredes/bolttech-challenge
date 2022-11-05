import { AppDataSource } from "../../database";
import { Project } from "../../entities/project.entity";
import { Task } from "../../entities/task.entity";
import { entityValidate } from "../../utils/entity-validate.util";

interface UpdateTask {
  id: string;
  description: string;
  done: boolean;
  endsAt: string;
  userId: string;
}

export const updateTask = async ({
  id,
  description,
  done,
  endsAt,
  userId,
}: Partial<UpdateTask>) => {
  if (!userId) return new Error("userId is required");
  if (!id) return new Error("id is required");
  const task = await AppDataSource.getRepository(Task).findOneBy({
    id,
    userId,
  });
  if (!task) return new Error("Task not exists!");

  if (description) task.description = description;
  if (typeof done === "boolean") task.done = done;
  if (endsAt) task.endsAt = new Date(endsAt);

  const error = await entityValidate(task);
  if (error) return new Error(error);
  await AppDataSource.getRepository(Task).update(id, task);
  return task;
};
