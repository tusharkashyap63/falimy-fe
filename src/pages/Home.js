import { Box, Container, Flex } from '@chakra-ui/react';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import Families from '../components/Home/Families';
import Header from '../components/Home/Header';
import UserContext from '../context/UserContext';
import { getFamilies } from '../network/lib/families';

export default function Home() {
  const { user } = useContext(UserContext);
  const { isLoading, data } = useQuery('families', () => getFamilies(user._id));

  return (
    <Container maxW="container.xl">
      <Flex h="100vh" overflow="hidden">
        <Box flexBasis="60%" p="16" overflow="auto">
          <Header />
          <Families families={data} familiesLoading={isLoading} />
        </Box>
        <Box
          flexBasis="40%"
          bgColor="purple.50"
          bgImage="url('/Clarence.svg')"
          bgSize="200%"
          bgRepeat="no-repeat"
        ></Box>
      </Flex>
    </Container>
  );
}
