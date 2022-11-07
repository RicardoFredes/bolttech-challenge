import React, { useContext } from "react";
import { Card, Container, ProjectCard, ProjectForm, Text } from "..";
import { ProjectsContext } from "../../contexts/projects.contexts";

export const ProjectsList = () => {
  const { projects } = useContext(ProjectsContext);
  return (
    <div className="projects-list">
      {projects.length === 0 ? (
        <Container>
          <Text variant="secondary">
            You don't have any projects yet, start by creating a project
          </Text>
          <br />
          <br />
          <Card>
            <ProjectForm.Add />
          </Card>
        </Container>
      ) : null}
      <div className="projects-list__container">
        {projects.map((project) => (
          <ProjectCard key={project.id} projectId={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};
