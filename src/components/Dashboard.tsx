// src/components/Dashboard.tsx
import {
  Box,
  Heading,
  Text,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box p={8}>
      <Heading mb={6}>Dashboard</Heading>

      {/* Key Metrics */}
      <SimpleGrid columns={[1, 2, 3]} spacing={6} mb={8}>
        <Stat bg="white" p={4} borderRadius="md" boxShadow="sm">
          <StatLabel>Total Users</StatLabel>
          <StatNumber>1,250</StatNumber>
          <StatHelpText>+12% this month</StatHelpText>
        </Stat>
        <Stat bg="white" p={4} borderRadius="md" boxShadow="sm">
          <StatLabel>Active Projects</StatLabel>
          <StatNumber>15</StatNumber>
          <StatHelpText>+5% this week</StatHelpText>
        </Stat>
        <Stat bg="white" p={4} borderRadius="md" boxShadow="sm">
          <StatLabel>Revenue</StatLabel>
          <StatNumber>$50,000</StatNumber>
          <StatHelpText>+8% this quarter</StatHelpText>
        </Stat>
      </SimpleGrid>

      {/* Quick Actions */}
      <Flex gap={4}>
        <Button colorScheme="teal">Add New Project</Button>
        <Button variant="outline">View Reports</Button>
      </Flex>
    </Box>
  );
};

export default Dashboard;