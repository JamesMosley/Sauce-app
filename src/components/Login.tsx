// src/components/Login.tsx
import {
  Box,
  Heading,
 
  FormLabel,
  Input,
  Button,
  VStack,
  Text,
  Link as ChakraLink,
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
      <Heading textAlign="center" mb={6}>
        Sports Login
      </Heading>

      <VStack spacing={4}>
        
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" />
       
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" />
        
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