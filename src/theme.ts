// src/theme.ts
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      500: '#319795', // Teal color
    },
  },
  fonts: {
    body: `'Open Sans', sans-serif`,
    heading: `'Roboto', serif`,
  },
});

export default theme;