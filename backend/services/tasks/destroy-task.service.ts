import { AppDataSource } from "../../database";
import { Task } from "../../entities/task.entity";

interface DestroyTask {
  id: string;
  userId: string;
}

export const destroyTask = async ({ id, userId }: Partial<DestroyTask>) => {
  if (!userId) return new Error("userId is required");
  if (!id) return new Error("id is required");
  const task = await AppDataSource.getRepository(Task).findOneBy({
    id,
    userId,
  });
  if (!task) return new Error("Task not exists!");
  if (task.done) return new Error("Completed tasks cannot be deleted");
  return AppDataSource.getRepository(Task).delete(id);
};
