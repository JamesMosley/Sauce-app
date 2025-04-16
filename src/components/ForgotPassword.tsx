// src/components/ForgotPassword.tsx
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
          <Link to="/login" style={{ color: "#319795", textDecoration: "none" }}>
            Login
          </Link>
        </Text>
      </VStack>
    </Box>
  );
};

export default ForgotPassword;