import { Box, Button, Container, Flex, Icon, Text } from '@chakra-ui/react';
import { BsHeartFill } from 'react-icons/bs';

export default function Home() {
  return (
    <Container maxW="container.xl">
      <Flex h="100vh" overflow="hidden">
        <Box flexBasis="60%" p="16" overflow="auto">
          <Text>Hi, Tushar</Text>
          <Text fontSize="3xl" maxW="339px" fontWeight="medium" mb="4">
            Stay connected to your family
          </Text>
          <Button colorScheme="purple" mb="16">
            Create
          </Button>
          <Text mb="4">Families you are a part of</Text>

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
                kashyaps
              </Text>
              <Text fontSize="sm">0 pending tasks</Text>
            </Box>
            <Icon as={BsHeartFill} w={8} h={8} color="red.300" />
          </Flex>
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
                kashyaps
              </Text>
              <Text fontSize="sm">0 pending tasks</Text>
            </Box>
            <Icon as={BsHeartFill} w={8} h={8} color="red.300" />
          </Flex>
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
                kashyaps
              </Text>
              <Text fontSize="sm">0 pending tasks</Text>
            </Box>
            <Icon as={BsHeartFill} w={8} h={8} color="red.300" />
          </Flex>
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
                kashyaps
              </Text>
              <Text fontSize="sm">0 pending tasks</Text>
            </Box>
            <Icon as={BsHeartFill} w={8} h={8} color="red.300" />
          </Flex>
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
                kashyaps
              </Text>
              <Text fontSize="sm">0 pending tasks</Text>
            </Box>
            <Icon as={BsHeartFill} w={8} h={8} color="red.300" />
          </Flex>
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
                kashyaps
              </Text>
              <Text fontSize="sm">0 pending tasks</Text>
            </Box>
            <Icon as={BsHeartFill} w={8} h={8} color="red.300" />
          </Flex>
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
