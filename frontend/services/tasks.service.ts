import { createTask, CreateTaskDTO } from "../requests/tasks.request";

const addTask = async (data: CreateTaskDTO) => {
  try {
    const result = await createTask(data);
    return { result, error: null };
  } catch (error) {
    return { result: null, error };
  }
};

export const TaskService = {
  add: addTask,
};
