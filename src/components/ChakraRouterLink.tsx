// src/components/ChakraRouterLink.tsx

import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { forwardRef } from "react";

type Props = RouterLinkProps & ChakraLinkProps;

const ChakraRouterLink = forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const { to, replace, state, ...rest } = props;
  return (
    <ChakraLink
      as={RouterLink}
      to={to}
      replace={replace}
      state={state}
      ref={ref}
      {...rest}
    />
  );
});

export default ChakraRouterLink;
