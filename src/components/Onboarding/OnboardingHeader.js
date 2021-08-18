import { Box, Flex, Text } from '@chakra-ui/react';

export default function OnboardingHeader({ step, subHeading }) {
  return (
    <Flex justify="space-between" align="flex-end" mb="4">
      <Box>
        <Text fontSize="xl" fontWeight="medium">
          Welcome
        </Text>
        <Text fontSize="xs" color="rgba(0, 0, 0, 0.7)">
          {subHeading}
        </Text>
      </Box>
      <Text fontSize="xs" fontWeight="medium">
        Step {step === 'create' || step === 'join' ? '3' : step} of 3
      </Text>
    </Flex>
  );
}
