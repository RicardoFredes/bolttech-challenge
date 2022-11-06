import React, { useState } from "react";
import { Button, Form, Input, OnSubmitValue } from "..";
import { useProjects } from "../../hooks/projects.hook";
import { CreateTaskDTO } from "../../requests/tasks.request";

interface CreateTaskProps {
  projectId: string;
}

export const CreateTask = ({ projectId }: CreateTaskProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const { addTask } = useProjects();

  const handleSubmit: OnSubmitValue<CreateTaskDTO> = async ({ description }) => {
    setIsLoading(true);
    await addTask({ description, projectId });
    setIsLoading(false);
  };
  return (
    <Form onSubmitValues={handleSubmit} className="flex-row">
      <Input
        className="flex-grow"
        placeholder="Task"
        name="description"
        autoComplete="off"
        required
        minLength={3}
      />
      <div>
        <Button type="submit" isLoading={isLoading}>
          Add
        </Button>
      </div>
    </Form>
  );
};
