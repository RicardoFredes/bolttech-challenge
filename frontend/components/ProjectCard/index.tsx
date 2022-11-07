import React from "react";
import { Card, Dropdown, ProjectForm, TaskForm, TasksList, Text } from "..";
import { Task } from "../../contexts/projects.contexts";
import { useModal } from "../../hooks/modal.hook";
import { useProjects } from "../../hooks/projects.hook";

interface ProjectCardProps {
  title: string;
  projectId: string;
  tasks: Task[];
}

export const ProjectCard = ({ title, projectId, tasks = [] }: ProjectCardProps) => {
  const { removeProject } = useProjects();
  const modal = useModal();

  const handleRemoveProject = () => removeProject(projectId);
  const handleEditProject = () =>
    modal.open(<ProjectForm.Edit projectId={projectId} projectTitle={title} />);

  return (
    <Card className="project-card">
      <Card.Header className="project-card__header">
        <Text>{title}</Text>
        <Dropdown>
          <Dropdown.MenuItem onClick={handleEditProject}>Edit</Dropdown.MenuItem>
          <Dropdown.MenuItem onClick={handleRemoveProject}>Remove</Dropdown.MenuItem>
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
