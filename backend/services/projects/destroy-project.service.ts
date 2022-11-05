import { AppDataSource } from "../../database";
import { Project } from "../../entities/project.entity";

interface DestroyProject {
  id: string;
  userId: string;
}

export const destroyProject = async ({ id, userId }: Partial<DestroyProject>) => {
  if (!userId) return new Error("userId is required");
  if (!id) return new Error("id is required");
  const project = await AppDataSource.getRepository(Project).findOneBy({
    id,
    userId,
  });
  if (!project) return new Error("Project not exists!");
  return AppDataSource.getRepository(Project).delete(id);
};
