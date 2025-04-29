// src/components/ChakraRouterLink.tsx
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import { forwardRef } from "react";

type ChakraRouterLinkProps = ChakraLinkProps & RouterLinkProps;

const ChakraRouterLink = forwardRef<HTMLAnchorElement, ChakraRouterLinkProps>((props, ref) => {
  return <ChakraLink as={RouterLink} ref={ref} {...props} />;
});

ChakraRouterLink.displayName = "ChakraRouterLink";

export default ChakraRouterLink;
