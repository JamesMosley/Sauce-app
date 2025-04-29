// src/components/ForgotPassword.tsx
import {
  Box,
  Heading,
  Input,
  Button,
  
  Text,
} from "@chakra-ui/react";
import { VStack } from "@chakra-ui/layout";

import { FormControl, FormLabel } from "@chakra-ui/form-control";
import ChakraRouterLink from "./ChakraRouterLink"; // Custom router link component

const ForgotPassword = () => {
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
        Forgot Password
      </Heading>

      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>

        <Button colorScheme="blue" w="full">
          Reset Password
        </Button>

        <Text fontSize="sm" textAlign="center">
          Remember your password?{" "}
          <ChakraRouterLink to="/login" color="teal.500">
            Login
          </ChakraRouterLink>
        </Text>
      </VStack>
    </Box>
  );
};

export default ForgotPassword;
