import { AppDataSource } from "../../database";
import { Project } from "../../entities/project.entity";

interface IndexProjects {
  userId?: string;
}

export const indexProjects = async ({ userId }: Partial<IndexProjects>) => {
  if (!userId) return new Error("userId is required");
  return AppDataSource.getRepository(Project).find({
    where: { userId },
    relations: { tasks: true },
  });
};
