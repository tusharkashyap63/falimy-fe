import { ColorModeScript } from '@chakra-ui/react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory';
import App from './App';

const customTheme = extendTheme({
  colors: {
    brand: {
      500: '#6C79D9',
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: 'Poppins, sans-serif',
      },
    },
  },
});

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <Router>
      <Auth0ProviderWithHistory>
        <ChakraProvider theme={customTheme}>
          <App />
        </ChakraProvider>
      </Auth0ProviderWithHistory>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
