import React from "react";
import { useFormik } from "formik";
import { Link as RouterLink } from "react-router-dom";
import { registerUser } from "../../requests/user.request";
import { useState } from "react";

export const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      registerUser(values)
        .then(() => {
          // toast({
          //   title: "Success",
          //   description: "Account created",
          //   position: 'top-right',
          //   status: "success",
          //   duration: 9000,
          //   isClosable: true,
          // });
        })
        .catch((error) => {
          // toast({
          //   title: "Error",
          //   description: error,
          //   position: 'top-right',
          //   status: "error",
          //   duration: 9000,
          //   isClosable: true,
          // });
        })
        .finally(() => setIsLoading(false));
    },
  });

  return (
    <div>ok</div>
  )

  // return (
  //   <Flex bg="gray.100" align="center" justify="center" h="100vh">
  //     <Box bg="white" p={6} rounded="md" width="100%" maxWidth={380} textAlign="center">
  //       <Heading mb={1} size="lg">
  //         Register your account
  //       </Heading>
  //       <Text>
  //         Or{" "}
  //         <Link as={RouterLink} to="/login" color="purple">
  //           enter with your account
  //         </Link>
  //       </Text>
  //       <form onSubmit={formik.handleSubmit}>
  //         <Stack spacing={4} mt={6}>
  //           <FormControl isRequired>
  //             <FormLabel>Name</FormLabel>
  //             <Input
  //               onChange={formik.handleChange}
  //               value={formik.values.name}
  //               type="text"
  //               name="name"
  //               minLength={3}
  //               required
  //             />
  //           </FormControl>
  //           <FormControl isRequired>
  //             <FormLabel>Email address</FormLabel>
  //             <Input
  //               onChange={formik.handleChange}
  //               value={formik.values.email}
  //               type="email"
  //               name="email"
  //               required
  //             />
  //           </FormControl>
  //           <FormControl isRequired>
  //             <FormLabel>Password</FormLabel>
  //             <Input
  //               onChange={formik.handleChange}
  //               value={formik.values.password}
  //               type="password"
  //               name="password"
  //               minLength={8}
  //               required
  //             />
  //           </FormControl>
  //           <FormControl isRequired>
  //             <FormLabel>Password confirmation</FormLabel>
  //             <Input
  //               onChange={formik.handleChange}
  //               value={formik.values.passwordConfirmation}
  //               type="password"
  //               minLength={8}
  //               name="passwordConfirmation"
  //               required
  //             />
  //           </FormControl>
  //           <br />
  //           <Button type="submit" colorScheme="purple" isLoading={isLoading}>
  //             Sign up
  //           </Button>
  //         </Stack>
  //       </form>
  //     </Box>
  //   </Flex>
  // );
};
