import React from 'react';
import { Switch } from 'react-router-dom';
import Routes from './Routes';
import { useAuth0 } from '@auth0/auth0-react';
import LoadingPage from './pages/LoadingPage';

function App() {
  const { isLoading } = useAuth0();

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
