// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Settings from './components/Settings';
import Password from './components/Password';
import { Box, VStack, Link as ChakraLink } from '@chakra-ui/react';

const App = () => {
  return (
    <Router>
      <Box p={4}>
        <VStack spacing={4} align="start">
          <ChakraLink href="/dashboard">Dashboard</ChakraLink>
          <ChakraLink href="/login">Login</ChakraLink>
          <ChakraLink href="/forgot-password">Forgot Password</ChakraLink>
          <ChakraLink href="/settings">Settings</ChakraLink>
          <ChakraLink href="/password">Change Password</ChakraLink>
          </VStack>
      </Box>

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/password" element={<Password />} />
      </Routes>
    </Router>
  );
};

export default App;