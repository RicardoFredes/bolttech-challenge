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
import { registerUser, RegisterUserDTO } from "../../requests/user.request";

export const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { openToast } = useContext(ToastContext);
  const navigate = useNavigate();

  const handleSubmit: OnSubmitValue<RegisterUserDTO> = async (values) => {
    setIsLoading(true);
    try {
      await registerUser(values);
      openToast({
        title: "Successful registration",
        type: "success",
        description: "Redirecting to dashboard",
        isClosable: true,
      });
      navigate("/");
    } catch (error) {
      openToast({
        title: "Error creating account",
        type: "error",
        description: error,
        isClosable: true,
      });
    }
    setIsLoading(false);
  };

  return (
    <Section className="sign-up">
      <Container size="sm">
        <Card>
          <Title className="text-center">Create Account</Title>
          <Text className="my-1 text-center">
            Already a member? <Link href="/login">Login</Link>
          </Text>
          <br />
          <Form onSubmitValues={handleSubmit}>
            <Input name="name" label="Username" required minLength={3} />
            <Input name="email" label="E-mail" required />
            <Input name="password" label="Password" type="password" required minLength={8} />
            <Input
              name="passwordConfirmation"
              label="Password Confirmation"
              type="password"
              minLength={8}
              required
            />
            <Button className="mt-1" type="submit" isLoading={isLoading}>
              Sign up
            </Button>
          </Form>
        </Card>
      </Container>
    </Section>
  );
};
