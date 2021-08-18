import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Poppins, sans-serif',
      },
    },
  },
});

export default customTheme;
