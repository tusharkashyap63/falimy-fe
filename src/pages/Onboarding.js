import { Box, Center } from '@chakra-ui/react';
import { useState } from 'react';
import CreateFamily from '../components/Onboarding/CreateFamily';
import JoinFamily from '../components/Onboarding/JoinFamily';
import NewFamily from '../components/Onboarding/NewFamily';
import OnboardingHeader from '../components/Onboarding/OnboardingHeader';
import UsernameForm from '../components/Onboarding/UsernameForm';
import useSteps from '../hooks/useSteps';

export default function Onboarding() {
  const { step, goToNextStep, goToPrevStep } = useSteps(2, 2);
  const [choice, setChoice] = useState('');

  const renderAccToStep = () => {
    if (step === 1) {
      return {
        component: <UsernameForm goToNextStep={goToNextStep} />,
        subHeading: "We're so excited to see you!",
      };
    } else if (step === 2) {
      return {
        component: (
          <NewFamily setChoice={setChoice} goToNextStep={goToNextStep} />
        ),
        subHeading: 'Start by creating or joining a family.',
      };
    } else if (step === 3) {
      if (choice === 'create') {
        return {
          component: <CreateFamily goToPrevStep={goToPrevStep} />,
          subHeading: 'Create a new family.',
        };
      } else if (choice === 'join') {
        return {
          component: <JoinFamily goToPrevStep={goToPrevStep} />,
          subHeading: 'Join an existing family.',
        };
      }
    }
  };

  return (
    <Center height="100vh" bgColor="purple.300">
      <Box w="450px" p="5" bgColor="white" boxShadow="md" borderRadius="md">
        <OnboardingHeader
          step={step}
          subHeading={renderAccToStep().subHeading}
        />
        {renderAccToStep().component}
      </Box>
    </Center>
  );
}
