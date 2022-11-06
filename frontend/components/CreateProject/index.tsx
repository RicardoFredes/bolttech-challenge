import React, { useState } from "react";
import { Button, Card, Form, Input, Title } from "..";
import { useToast } from "../../hooks/toast.hook";
import { createProject } from "../../requests/projects.request";

export const CreateProject = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const handleSubmit = async ({ title }) => {
    setIsLoading(true);
    try {
      await createProject({ title });
      toast.success("New project created successfully");
    } catch (error) {
      toast.error("Error creating project", error);
    }
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
