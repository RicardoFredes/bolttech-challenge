import React, { useState } from "react";
import { Button, Form, Input, OnSubmitValue } from "..";
import { useToast } from "../../hooks/toast.hook";
import { CreateTaskDTO } from "../../requests/tasks.request";
import { TaskService } from "../../services/tasks.service";

interface CreateTaskProps {
  projectId: string;
}

export const CreateTask = ({ projectId }: CreateTaskProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSubmit: OnSubmitValue<CreateTaskDTO> = async ({ description }) => {
    setIsLoading(true);
    const { error } = await TaskService.add({ description, projectId });
    if (!error) toast.success("Add task successfully");
    else toast.error("Error adding task", error);
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
