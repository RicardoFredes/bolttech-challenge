import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  ProjectForm,
  ProjectsList,
  Section,
  Text,
  Title,
} from "../../components";
import { useAuth } from "../../hooks/auth.hook";
import { useModal } from "../../hooks/modal.hook";
import { useProjects } from "../../hooks/projects.hook";

export const Dashboard = () => {
  const modal = useModal();
  const navigate = useNavigate();
  const { username } = useAuth();
  const { logout } = useProjects();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <main className="dashboard">
      <nav className="navbar">
        <Title size="sm">Bolttech TODO List</Title>
        <div className="navbar__menu">
          <Button onClick={() => modal.open(<ProjectForm.Add />)}>New Project</Button>
          <Button onClick={handleLogout} variant="naked">
            Logout
          </Button>
        </div>
      </nav>
      <Section>
        <Text>Olá, {username}</Text>
      </Section>
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
