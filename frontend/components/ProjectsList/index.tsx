import React, { useContext } from "react";
import { ProjectsContext } from "../../contexts/projects.contexts";
import { ProjectCard } from "../ProjectCard";

export const ProjectsList = () => {
  const { projects } = useContext(ProjectsContext);
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.id} projectId={project.id} {...project} />
      ))}
    </div>
  );
};
