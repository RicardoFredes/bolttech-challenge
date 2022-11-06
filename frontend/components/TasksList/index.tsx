import classNames from "classnames";
import React from "react";
import { Icon, Text, Title } from "..";
import { Task } from "../../contexts/projects.contexts";

interface TasksList {
  tasks: Task[];
}

export const TasksList = ({ tasks }) => {
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
        completedTasks.map((task) => <TaskItem key={task.id} {...task} />)
      ) : (
        <Text className="tasks-list__empty" variant="secondary" size="sm">
          No task completed {":("}
        </Text>
      )}
    </div>
  );
};

interface TaskItemProps extends Task {}

const TaskItem = ({ done, id, description }: TaskItemProps) => {
  const icon = done ? "fa-check-square" : "fa-square";
  const cn = classNames("task-item", { "task-item--done": done });
  return (
    <div className={cn} tabIndex={0} title={done ? "uncheck" : "check"}>
      <Icon icon={icon} />
      <Text className="task-item__description">{description}</Text>
    </div>
  );
};
