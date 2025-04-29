// src/components/Login.tsx

import {
  Box,
  Heading,
  Input,
  Button,
  VStack,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";

import {
  FormControl,
  FormLabel,
} from "@chakra-ui/form-control";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box
      p={8}
      maxW="md"
      mx="auto"
      bg="white"
      borderRadius="md"
      boxShadow="lg"
      mt={8}
    >
      <Heading textAlign="center" mb={6}>
        Sports Login
      </Heading>

      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" />
        </FormControl>

        <Button colorScheme="teal" w="full">
          Login
        </Button>

        <Text fontSize="sm" textAlign="center">
          Don't have an account?{" "}
          <ChakraLink as={Link} to="/forgot-password" color="teal.500">
            Forgot Password?
          </ChakraLink>
        </Text>
      </VStack>
    </Box>
  );
};

export default Login;
