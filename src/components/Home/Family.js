import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { BsHeartFill } from 'react-icons/bs';

export default function Family({ name }) {
  return (
    <Flex
      cursor="pointer"
      border="1px solid rgba(0, 0, 0, 0.1)"
      borderRadius="md"
      p="4"
      boxShadow="md"
      mb="4"
      align="center"
      justify="space-between"
    >
      <Box>
        <Text fontSize="xl" fontWeight="medium">
          {name}
        </Text>
        <Text fontSize="sm">0 pending tasks</Text>
      </Box>
      <Icon as={BsHeartFill} w={8} h={8} color="red.300" />
    </Flex>
  );
}
