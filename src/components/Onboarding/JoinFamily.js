import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
} from '@chakra-ui/react';
import React from 'react';

export default function JoinFamily({ goToPrevStep }) {
  return (
    <form>
      <FormControl id="name" mb="4" isRequired>
        <FormLabel fontSize="xs" fontWeight="semibold">
          ENTER FAMILY CODE
        </FormLabel>
        <Input variant="filled" placeholder="Code" />
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
        <Button colorScheme="purple" type="submit">
          Join
        </Button>
      </Flex>
    </form>
  );
}
