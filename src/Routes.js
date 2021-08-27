import { Route } from 'react-router';
import LandingPage from './pages/LandingPage';
import ProtectedRoute from './ProtectedRoute';
import { useAuth0 } from '@auth0/auth0-react';
import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import Project from './pages/Project';

export default function Routes() {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <>
        <ProtectedRoute exact path="/new" component={Onboarding} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute path="/:projectId" component={Project} />
      </>
    );
  } else {
    return <Route path="/" exact component={LandingPage} />;
  }
}
