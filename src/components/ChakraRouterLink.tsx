// src/components/ChakraRouterLink.tsx

import { Link as RouterLink } from "react-router-dom";
import { chakraFactory } from "@chakra-ui/react";

// Create chakra version of RouterLink
const ChakraRouterLink = chakraFactory(RouterLink, {
  shouldForwardProp: (prop) =>
    ["to", "replace", "state", "reloadDocument", "preventScrollReset"].includes(prop),
});

export default ChakraRouterLink;
