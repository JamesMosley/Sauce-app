// src/App.tsx

import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from "react-router-dom";
import { Box, VStack, Link as ChakraLink } from "@chakra-ui/react";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import Settings from "./components/Settings";
import Password from "./components/Password";

const App = () => {
  return (
    <Router>
      <Box p={4}>
        <VStack align="start">
          <ChakraLink as={RouterLink} to="/dashboard">Dashboard</ChakraLink>
          <ChakraLink as={RouterLink} to="/login">Login</ChakraLink>
          <ChakraLink as={RouterLink} to="/forgot-password">Forgot Password</ChakraLink>
          <ChakraLink as={RouterLink} to="/settings">Settings</ChakraLink>
          <ChakraLink as={RouterLink} to="/password">Change Password</ChakraLink>
        </VStack>
      </Box>

      <Routes>
        <Route path="/" element={<Login />} />
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
