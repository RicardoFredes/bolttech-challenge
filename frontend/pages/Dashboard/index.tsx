import React from "react";
import { Button, Container, ProjectForm, ProjectsList, Title } from "../../components";
import { useModal } from "../../hooks/modal.hook";

export const Dashboard = () => {
  const modal = useModal();
  return (
    <main className="dashboard">
      <nav className="navbar">
        <Title size="sm">Bolttech TODO List</Title>
        <div className="navbar__menu">
          <Button onClick={() => modal.open(<ProjectForm />)}>New Project</Button>
        </div>
      </nav>
      <section className="dashboard__project-board">
        <Container size="lg">
          <Title className="text-center" size="md">
            Project Board
          </Title>
        </Container>
        <ProjectsList />
      </section>
    </main>
  );
};
