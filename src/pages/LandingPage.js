import { Container } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/LandingPage/Header';
import Navbar from '../components/LandingPage/Navbar';

export default function LandingPage() {
  return (
    <Container
      maxW="container.xl"
      h="100vh"
      overflow="hidden"
      bgImage='url("/DrawKit/family71.svg")'
      bgRepeat="no-repeat"
      bgPosition="center bottom"
      bgSize={{
        base: '600px',
        md: '750px',
      }}
    >
      <Navbar />
      <Header />
    </Container>
  );
}
