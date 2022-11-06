import React, { useState } from "react";
import { Button, Card, Form, Input, Title } from "..";
import { useProjects } from "../../hooks/projects.hook";

export const CreateProject = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { addProject } = useProjects();
  const handleSubmit = async ({ title }) => {
    setIsLoading(true);
    await addProject({ title });
    setIsLoading(false);
  };
  return (
    <Card>
      <Form onSubmitValues={handleSubmit}>
        <Title size="sm">Create a new project</Title>
        <Input label="Project name" name="title" autoComplete="off" required minLength={3} />
        <Button type="submit" isLoading={isLoading}>
          Create project
        </Button>
      </Form>
    </Card>
  );
};
