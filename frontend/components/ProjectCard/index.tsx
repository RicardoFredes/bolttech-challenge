import React from "react";
import { Card, Dropdown, TaskForm, TasksList, Text } from "..";
import { Task } from "../../contexts/projects.contexts";
import { useProjects } from "../../hooks/projects.hook";

interface ProjectCardProps {
  title: string;
  projectId: string;
  tasks: Task[];
}

export const ProjectCard = ({ title, projectId, tasks = [] }: ProjectCardProps) => {
  const { removeProject } = useProjects();

  return (
    <Card className="project-card">
      <Card.Header className="project-card__header">
        <Text>{title}</Text>
        <Dropdown>
          <Dropdown.MenuItem>Edit</Dropdown.MenuItem>
          <Dropdown.MenuItem onClick={() => removeProject(projectId)}>Remove</Dropdown.MenuItem>
        </Dropdown>
      </Card.Header>
      <div className="project-card__tasks">
        {tasks.length === 0 ? (
          <Text variant="secondary" size="sm">
            Start by adding some task
          </Text>
        ) : (
          <TasksList tasks={tasks} projectId={projectId} />
        )}
      </div>
      <TaskForm projectId={projectId} />
    </Card>
  );
};
