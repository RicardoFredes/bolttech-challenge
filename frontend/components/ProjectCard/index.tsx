import React from "react";
import { Card, CreateTask, TasksList, Text } from "..";
import { Task } from "../../contexts/projects.contexts";

interface ProjectCardProps {
  title: string;
  projectId: string;
  tasks: Task[];
}

export const ProjectCard = ({ title, projectId, tasks = [] }: ProjectCardProps) => {
  return (
    <Card>
      <Card.Header>
        <Text>{title}</Text>
      </Card.Header>
      {tasks.length === 0 ? (
        <Text variant="secondary" size="sm">
          Start by adding some task
        </Text>
      ) : (
        <TasksList tasks={tasks} projectId={projectId} />
      )}
      <br />
      <br />
      <CreateTask projectId={projectId} />
    </Card>
  );
};
