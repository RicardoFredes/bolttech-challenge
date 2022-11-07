import React, { useRef, useState } from "react";
import { Button, Form, Input, OnSubmitValue } from "..";
import { useProjects } from "../../hooks/projects.hook";
import { CreateTaskDTO } from "../../requests/tasks.request";

interface TaskFormProps {
  projectId: string;
}

export const TaskForm = ({ projectId }: TaskFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const { addTask } = useProjects();
  const formRef = useRef<null | HTMLFormElement>(null);

  const handleSubmit: OnSubmitValue<CreateTaskDTO> = async ({ description }, event) => {
    setIsLoading(true);
    const form = event?.target as HTMLFormElement;
    await addTask({ description, projectId }).then(() => form.reset());
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
