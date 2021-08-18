import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import Routes from './Routes';
import { useAuth0 } from '@auth0/auth0-react';
import LoadingPage from './pages/LoadingPage';
import httpClient from './network/apiClient';

function App() {
  const { getAccessTokenSilently, isLoading } = useAuth0();

  useEffect(() => {
    httpClient.setTokenGenerator(getAccessTokenSilently);
  }, [getAccessTokenSilently]);

  if (isLoading) {
    return <LoadingPage label="Logging in" />;
  }

  return (
    <Switch>
      <Routes />
    </Switch>
  );
}

export default App;
