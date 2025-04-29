// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, VStack } from "@chakra-ui/react";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import Settings from "./components/Settings";
import Password from "./components/Password";

import ChakraRouterLink from "./components/ChakraRouterLink";

const App = () => {
  return (
    <Router>
      <Box p={4}>
        <VStack align="start">
          <ChakraRouterLink to="/dashboard">Dashboard</ChakraRouterLink>
          <ChakraRouterLink to="/login">Login</ChakraRouterLink>
          <ChakraRouterLink to="/forgot-password">Forgot Password</ChakraRouterLink>
          <ChakraRouterLink to="/settings">Settings</ChakraRouterLink>
          <ChakraRouterLink to="/password">Change Password</ChakraRouterLink>
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
