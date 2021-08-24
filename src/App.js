import React, { useContext, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import Routes from './Routes';
import { useAuth0 } from '@auth0/auth0-react';
import LoadingPage from './pages/LoadingPage';
import httpClient from './network/apiClient';
import UserContext from './context/UserContext';

function App() {
  const { getAccessTokenSilently, isLoading } = useAuth0();
  const { userLoading } = useContext(UserContext);

  useEffect(() => {
    httpClient.setTokenGenerator(getAccessTokenSilently);
  }, [getAccessTokenSilently]);

  if (isLoading || userLoading) {
    return <LoadingPage label="Logging in" />;
  }

  return (
    <Switch>
      <Routes />
    </Switch>
  );
}

export default App;
