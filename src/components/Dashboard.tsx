// src/components/Dashboard.tsx
import {
  Box,
  Heading,
  Flex,
  Text,
  SimpleGrid,
 
  StatLabel,
  
  StatHelpText,
  Button,
  Image,
} from "@chakra-ui/react";

const Dashboard = () => {
  const upcomingMatches = [
    { id: 1, homeTeam: "Lakers", awayTeam: "Warriors", date: "Nov 15, 2023" },
    { id: 2, homeTeam: "Celtics", awayTeam: "Nets", date: "Nov 17, 2023" },
  ];

  return (
    <Box p={8}>
      <Heading mb={6}>Sports Dashboard</Heading>

      {/* Key Metrics */}
      <SimpleGrid columns={[1, 2, 3]}  mb={8}>
       
          <StatLabel>Total Teams</StatLabel>
         
          <StatHelpText>+2 new teams this season</StatHelpText>
        
      
          <StatLabel>Active Players</StatLabel>
        
          <StatHelpText>+15% growth this year</StatHelpText>
       
        
          <StatLabel>Upcoming Matches</StatLabel>
        
          <StatHelpText>Next 2 weeks</StatHelpText>
        
      </SimpleGrid>

      {/* Upcoming Matches */}
      <Heading size="md" mb={4}>
        Upcoming Matches
      </Heading>
      {upcomingMatches.map((match) => (
        <Box
          key={match.id}
          p={4}
          bg="white"
          borderRadius="md"
          boxShadow="sm"
          mb={4}
        >
          <Flex justify="space-between" alignItems="center">
            <Box>
              <Text fontWeight="bold">{match.homeTeam} vs {match.awayTeam}</Text>
              <Text fontSize="sm" color="gray.500">{match.date}</Text>
            </Box>
            <Button colorScheme="teal" size="sm">
              View Details
            </Button>
          </Flex>
        </Box>
      ))}

      {/* Featured Player */}
      <Box mt={8} p={6} bg="white" borderRadius="md" boxShadow="lg">
        <Heading size="md" mb={4}>
          Featured Player
        </Heading>
        <Flex align="center" gap={4}>
          <Image
            src="https://via.placeholder.com/100"
            alt="Player"
            borderRadius="full"
            boxSize="100px"
          />
          <Box>
            <Text fontWeight="bold">LeBron James</Text>
            <Text fontSize="sm" color="gray.500">Los Angeles Lakers</Text>
            <Text fontSize="sm">Points: 27.5 | Assists: 8.3</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Dashboard;