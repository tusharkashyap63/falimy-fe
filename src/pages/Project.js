import { Flex } from '@chakra-ui/react';
import ProjectRoutes from '../components/Project/ProjectRoutes';
import Tabs from '../components/Project/Tabs';

export default function Project() {
  return (
    <Flex>
      <Tabs />
      <ProjectRoutes />
    </Flex>
  );
}
