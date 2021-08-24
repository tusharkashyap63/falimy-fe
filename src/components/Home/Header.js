import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import UserContext from '../../context/UserContext';
import { createFamily } from '../../network/lib/families';

export default function Header() {
  const { user } = useContext(UserContext);
  const [name, setName] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  const { isLoading, mutate } = useMutation(createFamily, {
    onSuccess: goToFamily,
  });

  function goToFamily(data) {
    history.push(`/${data._id}`);
  }

  const handleSubmit = async e => {
    e.preventDefault();

    const familyData = {
      name,
      head: user._id,
    };

    mutate(familyData);
  };

  return (
    <>
      <Text>Hi, {user.username}</Text>
      <Text fontSize="3xl" maxW="339px" fontWeight="medium" mb="4">
        Stay connected to your family
      </Text>
      <Button colorScheme="purple" mb="16" onClick={onOpen}>
        Create
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new family</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody>
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
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                colorScheme="purple"
                ml={4}
                type="submit"
                isLoading={isLoading}
              >
                Save
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
