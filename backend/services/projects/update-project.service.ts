import { AppDataSource } from "../../database";
import { Project } from "../../entities/project.entity";
import { entityValidate } from "../../utils/entity-validate.util";

interface UpdateProject {
  id: string;
  title: string;
  userId: string;
}

export const updateProject = async ({ id, title, userId }: Partial<UpdateProject>) => {
  if (!userId) return new Error("userId is required");
  if (!id) return new Error("id is required");
  const project = await AppDataSource.getRepository(Project).findOneBy({
    id,
    userId,
  });
  if (!project) return new Error("Project not exists!");
  if (title) project.title = title;
  const error = await entityValidate(project);
  if (error) return new Error(error);
  await AppDataSource.getRepository(Project).update(id, { title });
  return project;
};
