import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ColorModeScript } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory';
import { UserProvider } from './context/UserContext';
import App from './App';
import customTheme from './theme';

const queryClient = new QueryClient();

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <Router>
      <Auth0ProviderWithHistory>
        <ChakraProvider theme={customTheme}>
          <QueryClientProvider client={queryClient}>
            <UserProvider>
              <App />
            </UserProvider>
            <ReactQueryDevtools />
          </QueryClientProvider>
        </ChakraProvider>
      </Auth0ProviderWithHistory>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
