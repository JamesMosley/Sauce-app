// src/components/Settings.tsx
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  VStack,
  Divider,
} from "@chakra-ui/react";

const Settings = () => {
  return (
    <Box p={8}>
      <Heading mb={6}>Account Settings</Heading>

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
          <FormLabel>Favorite Team</FormLabel>
          <Select placeholder="Select your favorite team">
            <option value="lakers">Los Angeles Lakers</option>
            <option value="warriors">Golden State Warriors</option>
            <option value="nets">Brooklyn Nets</option>
          </Select>
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