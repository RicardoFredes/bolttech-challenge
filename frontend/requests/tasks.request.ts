import { ModelResponse, newModel } from "./model.request";

export interface CreateTaskDTO {
  description: string;
  projectId: string;
}

export interface CreateTaskResponse extends CreateTaskDTO {
  done: boolean;
  createdAt: string;
  id: string;
}

export const createTask = async ({ description, projectId }: CreateTaskDTO) => {
  try {
    const response = await newModel("/tasks").post<ModelResponse<CreateTaskResponse>>("", {
      description,
      projectId,
    });
    return response.data.result;
  } catch (error) {
    return Promise.reject(error.response.data.message);
  }
};
