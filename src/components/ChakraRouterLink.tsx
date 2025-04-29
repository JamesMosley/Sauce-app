// src/components/ChakraRouterLink.tsx

import { Link as RouterLink } from "react-router-dom";
import { chakra } from "@chakra-ui/react";

const ChakraRouterLink = chakra(RouterLink, {
  shouldForwardProp: (prop) =>
    ["to", "replace", "state", "reloadDocument", "preventScrollReset"].includes(prop),
});

export default ChakraRouterLink;
