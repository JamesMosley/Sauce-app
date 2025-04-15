// src/components/Dashboard.tsx
import { Box, Heading, Text } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <Box p={8}>
      <Heading mb={4}>Welcome to the Dashboard</Heading>
      <Text fontSize="lg">Here you can view your analytics and manage your account.</Text>
    </Box>
  );
};

export default Dashboard;