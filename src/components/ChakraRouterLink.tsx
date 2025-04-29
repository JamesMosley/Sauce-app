// src/components/ChakraRouterLink.tsx
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react";

type ChakraRouterLinkProps = Omit<ChakraLinkProps, "href"> & RouterLinkProps;

export const ChakraRouterLink = (props: ChakraRouterLinkProps) => {
  return <ChakraLink as={RouterLink} {...props} />;
};


export default ChakraRouterLink;
