import React from "react";
import { Container, CreateProject, ProjectsList, Section, Title } from "../../components";

export const Home = () => {
  return (
    <main>
      <Section>
        <Container>
          <Title size="sm">TODO List</Title>
          <CreateProject />
          <ProjectsList />
        </Container>
      </Section>
    </main>
  );
};
