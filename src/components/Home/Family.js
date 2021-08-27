import { Box, Flex, Icon, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import { BsHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Family({ name, familyId }) {
  return (
    <LinkBox
      border="1px solid rgba(0, 0, 0, 0.1)"
      borderRadius="md"
      p="4"
      boxShadow="sm"
      mb="4"
      transition="box-shadow 0.1s ease-in"
      _hover={{
        boxShadow: 'md',
      }}
    >
      <Flex align="center" justify="space-between">
        <Box>
          <LinkOverlay
            to={`/${familyId}`}
            as={Link}
            fontSize="xl"
            fontWeight="medium"
          >
            {name}
          </LinkOverlay>
          <Text fontSize="sm">0 pending tasks</Text>
        </Box>
        <Icon as={BsHeartFill} w={8} h={8} color="red.300" />
      </Flex>
    </LinkBox>
  );
}
