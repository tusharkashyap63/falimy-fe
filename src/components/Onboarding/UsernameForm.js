import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { createUser } from '../../network/lib/users';
import Datepicker from '../Datepicker/Datepicker';

export default function UsernameForm({ goToNextStep }) {
  const [username, setUsername] = useState('');
  const [birthday, setBirthday] = useState('');

  const { isLoading, mutate } = useMutation(createUser, {
    onSuccess: goToNextStep,
  });

  const handleSubmit = async e => {
    e.preventDefault();

    const userData = {
      username,
      birthday: new Date(birthday),
    };

    mutate(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="username" mb="4" isRequired>
        <FormLabel fontSize="xs" fontWeight="semibold">
          WHAT SHOULD WE CALL YOU?
        </FormLabel>
        <Input
          variant="filled"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl id="birthday" mb="5" isRequired>
        <FormLabel fontSize="xs" fontWeight="semibold">
          WHEN IS YOUR BIRTHDAY?
        </FormLabel>
        <Datepicker
          value={birthday}
          onChange={e => setBirthday(e.target.value)}
          required
        />
      </FormControl>
      <Button
        isFullWidth
        colorScheme="purple"
        type="submit"
        isLoading={isLoading}
      >
        Next
      </Button>
    </form>
  );
}
