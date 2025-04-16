// src/components/Settings.tsx
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Divider,
} from "@chakra-ui/react";

const Settings = () => {
  return (
    <Box p={8}>
      <Heading mb={6}>Settings</Heading>

      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <Input placeholder="Enter your full name" />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Enter your email" />
        </FormControl>
        <FormControl>
          <FormLabel>Phone Number</FormLabel>
          <Input placeholder="Enter your phone number" />
        </FormControl>
        <Divider my={4} />
        <Button colorScheme="purple" w="full">
          Save Changes
        </Button>
      </VStack>
    </Box>
  );
};

export default Settings;