import { AppDataSource } from "../../database";
import { Task } from "../../entities/task.entity";

interface ShowTask {
  id: string;
  userId: string;
}

export const showTask = async ({ id, userId }: Partial<ShowTask>) => {
  if (!userId) return new Error("userId is required");
  if (!id) return new Error("id is required");
  const task = await AppDataSource.getRepository(Task).findOne({
    where: { id, userId },
    relations: { project: true },
  });
  if (!task) return new Error("Task not exists!");
  return task;
};
