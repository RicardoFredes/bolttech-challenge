import { AppDataSource } from "../../database";
import { Project } from "../../entities/project.entity";

interface ShowProject {
  id: string;
  userId: string;
}

export const showProject = async ({ id, userId }: Partial<ShowProject>) => {
  if (!userId) return new Error("userId is required");
  if (!id) return new Error("id is required");
  const project = await AppDataSource.getRepository(Project).findOne({
    where: { id, userId },
    relations: { tasks: true },
  });
  if (!project) return new Error("Project not exists!");
  return project;
};
