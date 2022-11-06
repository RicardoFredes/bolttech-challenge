import { ModelResponse, newModel } from "./model.request";

interface CreateProjectDTO {
  title: string;
}

export interface CreateProjectResponse {
  id: string;
  name: string;
  email: string;
  token: string;
}

export const createProject = async ({ title }: CreateProjectDTO) => {
  try {
    const response = await newModel("/projects").post<ModelResponse<CreateProjectResponse>>("", {
      title,
    });
    return response.data.result;
  } catch (error) {
    return Promise.reject(error.response.data.message);
  }
};

export const getProjects = async () => {
  try {
    const response = await newModel("/projects").get("");
    return response.data.result;
  } catch (error) {
    return Promise.reject(error.response.data.message);
  }
};
