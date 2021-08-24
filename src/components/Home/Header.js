import { Button, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Text>Hi, {user.username}</Text>
      <Text fontSize="3xl" maxW="339px" fontWeight="medium" mb="4">
        Stay connected to your family
      </Text>
      <Button colorScheme="purple" mb="16">
        Create
      </Button>
    </>
  );
}
