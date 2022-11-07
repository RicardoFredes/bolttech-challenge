import React, { createContext, useEffect, useState } from "react";
import { useToast } from "../hooks/toast.hook";
import { CreateProjectDTO, ProjectsRequest } from "../requests/projects.request";
import { CreateTaskDTO, DoneTaskDTO, TasksRequest } from "../requests/tasks.request";

export interface Task {
  id: string;
  description: string;
  done: boolean;
}

interface Project {
  id: string;
  title: string;
  tasks: Task[];
}

const projects: Project[] = [];

export const ProjectsContext = createContext({
  projects,
  isLoading: false,

  addTask: async (_data: CreateTaskDTO) => {},
  editTask: async (_id: string, _description: string, _projectId: string) => {},
  removeTask: async (_id: string, _projectId: string) => {},
  toggleTaskDone: async (_data: DoneTaskDTO) => {},

  addProject: async (_data: CreateProjectDTO) => {},
  editProject: async (_id: string, _title: string) => {},
  removeProject: async (_id: string) => {},
});

export const ProjectsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const toast = useToast();

  const handleGetProjects = async () => {
    setIsLoading(true);
    return ProjectsRequest.get()
      .then(setProjects)
      .catch((error) => toast.error("Error loading projects", error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    handleGetProjects();
  }, []);

  const addTask = async (data: CreateTaskDTO) =>
    TasksRequest.add(data)
      .then((task: Task) =>
        setProjects((projects) =>
          projects.map((project) => {
            if (project.id === data.projectId) {
              return {
                ...project,
                tasks: project.tasks.concat(task),
              };
            }
            return project;
          })
        )
      )
      .catch((error) => toast.error("Error adding task", error));

  const editTask = async (id: string, description: string, projectId: string) => {};
  const removeTask = async (id: string, projectId: string) => {};

  const toggleTaskDone = async ({ projectId, done, id }: DoneTaskDTO) => {
    const newDone = !done;
    return TasksRequest.done({ projectId, done: newDone, id })
      .then(() =>
        setProjects((projects) =>
          projects.map((project) => {
            if (project.id !== projectId) return project;
            const tasks = project.tasks.map((task) => {
              if (task.id !== id) return task;
              return { ...task, done: newDone };
            });
            return { ...project, tasks };
          })
        )
      )
      .catch((error) => toast.error("Error completing task", error));
  };

  const addProject = async ({ title }: CreateProjectDTO) =>
    ProjectsRequest.add({ title })
      .then((project: Project) =>
        setProjects((projects) => {
          projects.push(project);
          return projects;
        })
      )
      .then(() => toast.success("New project created successfully"))
      .catch((error) => toast.error("Error adding new project", error));

  const editProject = async (id: string, title: string) => {};

  const removeProject = async (projectId: string) => {
    if (!confirm("Do you want to remove the project?")) return;
    return ProjectsRequest.remove({ id: projectId })
      .then(() => setProjects((projects) => projects.filter(({ id }) => id !== projectId)))
      .then(() => toast.success("Project removed"))
      .catch((error) => toast.error("Error removing project", error));
  };

  const value = {
    projects,
    isLoading,
    addTask,
    editTask,
    removeTask,
    toggleTaskDone,
    addProject,
    editProject,
    removeProject,
  };
  return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>;
};
