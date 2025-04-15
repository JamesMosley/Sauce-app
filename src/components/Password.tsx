// src/components/Password.tsx
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

const Password = () => {
  return (
    <Box p={8} maxW="md" mx="auto">
      <Heading mb={6}>Change Password</Heading>
      <VStack spacing={4}>
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