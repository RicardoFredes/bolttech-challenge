import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Container,
  Form,
  Input,
  Link,
  OnSubmitValue,
  Section,
  Text,
  Title,
} from "../../components";
import { useAuth } from "../../hooks/auth.hook";
import { useProjects } from "../../hooks/projects.hook";
import { useToast } from "../../hooks/toast.hook";
import { login, LoginDTO } from "../../requests/user.request";

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const auth = useAuth();

  const { loadProjects } = useProjects();

  const handleSubmit: OnSubmitValue<LoginDTO> = async ({ email, password }) => {
    setIsLoading(true);

    try {
      await login({ email, password });
      auth.login();
      await loadProjects();
      toast.success("Login successfully", "Redirecting to dashboard");
      navigate("/");
    } catch (error) {
      toast.error("Login error", error);
    }
    setIsLoading(false);
  };

  return (
    <Section>
      <Container size="sm">
        <Card>
          <Title className="text-center">Login to Your Account</Title>
          <Text className="my-1 text-center">
            New here? <Link href="/signup">Sign up</Link>
          </Text>
          <br />
          <Form onSubmitValues={handleSubmit}>
            <Input name="email" label="E-mail" required />
            <Input name="password" label="Password" type="password" required minLength={8} />
            <Button className="mt-1" type="submit" isLoading={isLoading}>
              Login
            </Button>
          </Form>
        </Card>
      </Container>
    </Section>
  );
};
