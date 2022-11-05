import { createTask } from "./create-task.service";
import { destroyTask } from "./destroy-task.service";
import { indexTasks } from "./index-tasks.service";
import { showTask } from "./show-task.service";
import { updateTask } from "./update-task.service";

export const TasksService = {
  indexTasks,
  showTask,
  createTask,
  updateTask,
  destroyTask,
};
