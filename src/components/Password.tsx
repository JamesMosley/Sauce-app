// src/components/ForgotPassword.tsx
import {
  Box,
  Heading,
  Input,
  Button,
  
  
} from "@chakra-ui/react";
import { VStack } from "@chakra-ui/layout";

import { FormControl, FormLabel } from "@chakra-ui/form-control";

const Password = () => {
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
        Change Password
      </Heading>

      <VStack >
        <FormControl>
          <FormLabel>Current Password</FormLabel>
          <Input type="password" placeholder="Enter current password" />
        </FormControl>
        <FormControl>
          <FormLabel>New Password</FormLabel>
          <Input type="password" placeholder="Enter new password" />
        </FormControl>
        <FormControl>
          <FormLabel>Confirm New Password</FormLabel>
          <Input type="password" placeholder="Confirm new password" />
        </FormControl>
        <Button colorScheme="green" w="full">
          Update Password
        </Button>
      </VStack>
    </Box>
  );
};

export default Password;