import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function Header() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Box
      as="header"
      textAlign="center"
      pt={{
        base: 14,
        md: 12,
      }}
    >
      <Heading as="h1" size="3xl" fontWeight="semibold" fontFamily="Poppins">
        All-in-one family planner
      </Heading>
      <Text
        fontWeight="medium"
        color="rgba(0,0,0,0.6)"
        mt={{
          base: 6,
          md: 4,
        }}
      >
        One tool for the entire family. Plan, safeguard, and get organized.
      </Text>
      <Flex
        align="center"
        justify="center"
        mt={{
          base: 6,
          md: 4,
        }}
      >
        <Text mr="4" fontWeight="medium" color="rgba(0,0,0,0.4)" fontSize="sm">
          Built to empower every family.
        </Text>
        <Button
          size="sm"
          colorScheme="purple"
          onClick={() => {
            loginWithRedirect({
              screen_hint: 'signup',
              appState: {
                returnTo: '/new/1',
              },
            });
          }}
        >
          Sign up
        </Button>
      </Flex>
    </Box>
  );
}
