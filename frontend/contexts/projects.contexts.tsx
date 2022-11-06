import React, { createContext, useEffect, useState } from "react";
import { useToast } from "../hooks/toast.hook";
import { getProjects } from "../requests/projects.request";

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
});

export const ProjectsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const toast = useToast();

  const handleGetProjects = async () => {
    setIsLoading(true);
    try {
      const projects = await getProjects();
      setProjects(projects);
    } catch (error) {
      toast.error("Error loading projects", error);
    }
  };

  useEffect(() => {
    handleGetProjects();
  }, []);

  const value = {
    projects,
    isLoading,
  };
  return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>;
};
