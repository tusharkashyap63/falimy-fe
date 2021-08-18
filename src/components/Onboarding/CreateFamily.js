import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { createFamily } from '../../network/lib/families';

export default function CreateFamily({ goToPrevStep }) {
  const [name, setName] = useState('');
  const { isLoading, mutate } = useMutation(createFamily);

  const handleSubmit = async e => {
    e.preventDefault();

    const familyData = {
      name,
      head: '611cd191cde234383892ed7f',
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
