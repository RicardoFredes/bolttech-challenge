import classNames from "classnames";
import React, { useState } from "react";
import { Icon, IconButton, Text, Title } from "..";
import { Task } from "../../contexts/projects.contexts";
import { useProjects } from "../../hooks/projects.hook";

interface TasksList {
  tasks: Task[];
  projectId: string;
}

export const TasksList = ({ tasks, projectId }) => {
  const completedTasks = tasks.filter(({ done }) => done);
  const uncompletedTasks = tasks.filter(({ done }) => !done);
  return (
    <div className="tasks-list">
      <Title size="sm">To Do</Title>
      {uncompletedTasks.length > 0 ? (
        uncompletedTasks.map((task) => <TaskItem key={task.id} {...task} />)
      ) : (
        <Text className="tasks-list__empty" variant="secondary" size="sm">
          All done {"\\o/"}
        </Text>
      )}
      <Title size="sm">Done</Title>
      {completedTasks.length > 0 ? (
        completedTasks.map((task) => <TaskItem key={task.id} {...task} projectId={projectId} />)
      ) : (
        <Text className="tasks-list__empty" variant="secondary" size="sm">
          No task completed {":("}
        </Text>
      )}
    </div>
  );
};

interface TaskItemProps extends Task {
  projectId: string;
}

const TaskItem = ({ done, id, description, projectId }: TaskItemProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toggleTaskDone, removeTask } = useProjects();

  const handleToggle = async () => {
    if (isLoading) return;
    setIsLoading(true);
    await toggleTaskDone({ id, projectId, done });
    setIsLoading(false);
  };

  const handleRemove = async () => {
    if (isLoading) return;
    setIsLoading(true);
    await removeTask(id, projectId);
    setIsLoading(false);
  };

  const icon = isLoading ? "fa-circle-notch fa-spin" : done ? "fa-check-square" : "fa-square";
  const cn = classNames("task-item", { "task-item--done": done });
  return (
    <div className={cn}>
      <div
        className="task-item__content flex-grow"
        tabIndex={0}
        onClick={handleToggle}
        title={done ? "uncheck" : "check"}
      >
        <Icon className="task-item__icon" icon={icon} />
        <Text className="task-item__description flex-grow">{description}</Text>
      </div>
      {done ? null : (
        <IconButton
          onClick={handleRemove}
          className="task-item__remove"
          icon="fa-trash"
          isLoading={isLoading}
        />
      )}
    </div>
  );
};
