import { ModelResponse, newModel } from "./model.request";

export interface CreateTaskDTO {
  description: string;
  projectId: string;
}

export interface DoneTaskDTO {
  id: string;
  projectId: string;
  done: boolean;
}

export interface RemoveTaskDTO {
  id: string;
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

export const doneTask = async ({ id, done }: DoneTaskDTO) => {
  try {
    await newModel("/tasks").put(id, { done });
  } catch (error) {
    return Promise.reject(error.response.data.message);
  }
};

export const removeTask = async ({ id }: RemoveTaskDTO) => {
  try {
    await newModel("/tasks").delete(id);
  } catch (error) {
    return Promise.reject(error.response.data.message);
  }
};

export const TasksRequest = {
  add: createTask,
  done: doneTask,
  remove: removeTask,
};
