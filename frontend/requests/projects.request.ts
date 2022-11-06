import { ModelResponse, newModel } from "./model.request";
import { CreateTaskResponse } from "./tasks.request";

export interface CreateProjectDTO {
  title: string;
}

export interface CreateProjectResponse {
  id: string;
  title: string;
  tasks: CreateTaskResponse[];
}

const createProject = async ({ title }: CreateProjectDTO) => {
  try {
    const response = await newModel("/projects").post<ModelResponse<CreateProjectResponse>>("", {
      title,
    });
    return response.data.result;
  } catch (error) {
    return Promise.reject(error.response.data.message);
  }
};

const getProjects = async () => {
  try {
    const response = await newModel("/projects").get("");
    return response.data.result;
  } catch (error) {
    return Promise.reject(error.response.data.message);
  }
};

export const ProjectsRequest = {
  get: getProjects,
  add: createProject,
};
