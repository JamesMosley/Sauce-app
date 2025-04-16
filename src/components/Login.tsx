// src/components/Login.tsx
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
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
      <Heading mb={6} textAlign="center">
        Login
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
        <Text fontSize="sm">
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