import React, { useContext, useState } from "react";
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
import { ToastContext } from "../../contexts/toast.context";
import { login, LoginDTO } from "../../requests/user.request";

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { openToast } = useContext(ToastContext);
  const navigate = useNavigate();

  const handleSubmit: OnSubmitValue<LoginDTO> = async ({ email, password }) => {
    setIsLoading(true);

    try {
      const result = await login({ email, password });
      console.log(result);
      openToast({
        title: "Login successfully",
        type: "success",
        description: "Redirecting to dashboard",
        isClosable: true,
      });
      navigate("/");
    } catch (error) {
      openToast({ title: "Login error", type: "error", description: error, isClosable: true });
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
