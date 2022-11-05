import { createProject } from "./create-project.service";
import { destroyProject } from "./destroy-project.service";
import { indexProjects } from "./index-project.service";
import { showProject } from "./show-project.service";
import { updateProject } from "./update-project.service";

export const ProjectsService = {
  indexProjects,
  showProject,
  createProject,
  updateProject,
  destroyProject,
};
