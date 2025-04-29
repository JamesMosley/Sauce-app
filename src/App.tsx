import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import Settings from "./components/Settings";
import Password from "./components/Password";
import { Box, VStack, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Box p={4}>
        <VStack align="start">
          <ChakraLink as={Link} to="/dashboard">Dashboard</ChakraLink>
          <ChakraLink as={Link} to="/login">Login</ChakraLink>
          <ChakraLink as={Link} to="/forgot-password">Forgot Password</ChakraLink>
          <ChakraLink as={Link} to="/settings">Settings</ChakraLink>
          <ChakraLink as={Link} to="/password">Change Password</ChakraLink>
        </VStack>
      </Box>

      <Routes>
        <Route path="/" element={<Login />} /> {/* NEW */}
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
