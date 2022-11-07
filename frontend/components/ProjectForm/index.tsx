import React, { useState } from "react";
import { Button, Form, Input, Title } from "..";
import { useModal } from "../../hooks/modal.hook";
import { useProjects } from "../../hooks/projects.hook";

interface ProjectFormEditProps {
  projectId: string;
  projectTitle: string;
}

interface ProjectFormProps {
  title: string;
  buttonLabel: string;
  projectId?: string;
  projectTitle?: string;
}

export const ProjectForm = ({ title, buttonLabel, projectId, projectTitle }: ProjectFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const modal = useModal();

  const { addProject, editProject } = useProjects();

  const handleSubmit = async ({ title }) => {
    setIsLoading(true);
    if (projectId) await editProject(projectId, title);
    else await addProject({ title });
    setIsLoading(false);
    modal.close();
  };
  return (
    <Form onSubmitValues={handleSubmit}>
      <Title size="sm">{title}</Title>
      <Input
        label="Project name"
        name="title"
        defaultValue={projectTitle}
        autoComplete="off"
        required
        minLength={3}
      />
      <Button type="submit" isLoading={isLoading}>
        {buttonLabel}
      </Button>
    </Form>
  );
};

ProjectForm.Add = () => <ProjectForm title="Create a new project" buttonLabel="Create project" />;

ProjectForm.Edit = (props: ProjectFormEditProps) => (
  <ProjectForm title="Edit project" buttonLabel="Edit" {...props} />
);
