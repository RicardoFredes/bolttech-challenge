import { AppDataSource } from "../../database";
import { Project } from "../../entities/project.entity";
import { entityValidate } from "../../utils/entity-validate.util";

interface CreateProject {
  title: string;
  userId: string;
}

export const createProject = async ({ title, userId }: Partial<CreateProject>) => {
  if (!userId) return new Error("userId is required");
  const project = AppDataSource.getRepository(Project).create({
    title,
    userId,
  });
  const error = await entityValidate(project);
  if (error) return new Error(error);
  await AppDataSource.getRepository(Project).save(project);
  return project;
};
