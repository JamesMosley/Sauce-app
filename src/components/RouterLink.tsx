// src/components/RouterLink.tsx
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import { forwardRef } from "react";

// Wrap React Router's Link so Chakra UI can recognize `to`
const ChakraRouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>((props, ref) => {
  return <RouterLink ref={ref} {...props} />;
});

export default ChakraRouterLink;
