// src/components/Settings.tsx
import {
  Box,
  Heading,
 
  Input,
  
  Button,
  
  
} from "@chakra-ui/react";

import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { VStack } from "@chakra-ui/layout";
import { Divider } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";

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