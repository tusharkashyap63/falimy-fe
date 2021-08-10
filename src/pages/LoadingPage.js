import { Center, Spinner } from '@chakra-ui/react';
import React from 'react';

export default function LoadingPage({ label = 'Loading' }) {
  return (
    <Center h="100vh">
      <Spinner color="purple.500" thickness="4px" label={label} />
    </Center>
  );
}
