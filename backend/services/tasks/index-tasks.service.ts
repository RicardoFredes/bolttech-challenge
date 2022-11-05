import { AppDataSource } from "../../database";
import { Task } from "../../entities/task.entity";

interface IndexTasks {
  userId: string;
}

export const indexTasks = ({ userId }: Partial<IndexTasks>) => {
  if (!userId) return new Error("userId is required");
  return AppDataSource.getRepository(Task).find({
    where: { userId },
    relations: { project: true },
  });
};
