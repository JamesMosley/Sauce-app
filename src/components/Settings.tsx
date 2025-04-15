// src/components/Settings.tsx
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const Settings = () => {
  return (
    <Box p={8}>
      <Heading mb={4}>Settings</Heading>
      <Text fontSize="lg">Manage your account preferences here.</Text>
      <Button mt={4} colorScheme="purple">
        Save Changes
      </Button>
    </Box>
  );
};

export default Settings;