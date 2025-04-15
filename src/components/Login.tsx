// src/components/Login.tsx
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

const Login = () => {
  return (
    <Box p={8} maxW="md" mx="auto">
      <Heading mb={6}>Login</Heading>
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
      </VStack>
    </Box>
  );
};

export default Login;