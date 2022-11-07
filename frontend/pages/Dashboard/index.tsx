import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, ProjectForm, ProjectsList, Title } from "../../components";
import { useModal } from "../../hooks/modal.hook";
import { AuthService } from "../../services/auth.service";

export const Dashboard = () => {
  const modal = useModal();
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.del();
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
