import { useAuth0 } from '@auth0/auth0-react';
import { Button, Text } from '@chakra-ui/react';
import React from 'react';

export default function Profile() {
  const { logout, user } = useAuth0();
  return (
    <div>
      <Text>{user.email}</Text>
      <Button
        onClick={() =>
          logout({
            returnTo: window.location.origin,
          })
        }
      >
        Log Out
      </Button>
    </div>
  );
}
