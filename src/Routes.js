import { Route } from 'react-router';
import LandingPage from './pages/LandingPage';
import ProtectedRoute from './ProtectedRoute';
import Profile from './pages/Profile';
import { useAuth0 } from '@auth0/auth0-react';

export default function Routes() {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <ProtectedRoute exact path="/" component={Profile} />;
  } else {
    return <Route path="/" exact component={LandingPage} />;
  }
}
