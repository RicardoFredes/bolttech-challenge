import React, { useState } from "react";
import { Button, Form, Input, Title } from "..";
import { useModal } from "../../hooks/modal.hook";
import { useProjects } from "../../hooks/projects.hook";

export const ProjectForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { addProject } = useProjects();
  const modal = useModal();

  const handleSubmit = async ({ title }) => {
    setIsLoading(true);
    await addProject({ title });
    setIsLoading(false);
    modal.close();
  };
  return (
    <Form onSubmitValues={handleSubmit}>
      <Title size="sm">Create a new project</Title>
      <Input label="Project name" name="title" autoComplete="off" required minLength={3} />
      <Button type="submit" isLoading={isLoading}>
        Create project
      </Button>
    </Form>
  );
};
