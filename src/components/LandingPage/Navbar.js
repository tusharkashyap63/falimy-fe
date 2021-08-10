import { useAuth0 } from '@auth0/auth0-react';
import { Button, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
import Logo from '../Logo';

export default function Navbar() {
  const { loginWithRedirect } = useAuth0();
  return (
    <Flex as="nav" py="3">
      <Logo />
      <Spacer />
      <Button
        variant="ghost"
        colorScheme="purple"
        onClick={loginWithRedirect}
        fontWeight="medium"
      >
        Log in
      </Button>
      <Button
        variant="ghost"
        colorScheme="purple"
        fontWeight="medium"
        onClick={() => {
          loginWithRedirect({
            screen_hint: 'signup',
          });
        }}
      >
        Sign up
      </Button>
    </Flex>
  );
}
