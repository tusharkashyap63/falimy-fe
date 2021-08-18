import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
} from '@chakra-ui/react';
import { useState, useContext } from 'react';
import { useMutation } from 'react-query';
import UserContext from '../../context/UserContext';
import { createFamily } from '../../network/lib/families';

export default function CreateFamily({ goToPrevStep }) {
  const [name, setName] = useState('');
  const { user } = useContext(UserContext);
  const { isLoading, mutate } = useMutation(createFamily);

  const handleSubmit = async e => {
    e.preventDefault();

    const familyData = {
      name,
      head: user._id,
    };

    mutate(familyData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="name" mb="4" isRequired>
        <FormLabel fontSize="xs" fontWeight="semibold">
          PICK A NAME FOR YOUR FAMILY
        </FormLabel>
        <Input
          variant="filled"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </FormControl>
      <Flex>
        <Button
          colorScheme="purple"
          variant="link"
          mr="5"
          onClick={goToPrevStep}
        >
          Back
        </Button>
        <Spacer />
        <Button colorScheme="purple" type="submit" isLoading={isLoading}>
          Create
        </Button>
      </Flex>
    </form>
  );
}
