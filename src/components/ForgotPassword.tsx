// src/components/ForgotPassword.tsx
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

const ForgotPassword = () => {
  return (
    <Box p={8} maxW="md" mx="auto">
      <Heading mb={6}>Forgot Password</Heading>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>
        <Button colorScheme="blue" w="full">
          Reset Password
        </Button>
      </VStack>
    </Box>
  );
};

export default ForgotPassword;