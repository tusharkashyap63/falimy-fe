import { Button } from '@chakra-ui/react';

export default function NewFamily({ setChoice, goToNextStep }) {
  const goToChoice = choice => {
    setChoice(choice);
    goToNextStep();
  };

  return (
    <>
      <Button
        isFullWidth
        colorScheme="purple"
        mb="4"
        onClick={() => goToChoice('create')}
      >
        Create Family
      </Button>
      <Button
        isFullWidth
        colorScheme="purple"
        onClick={() => goToChoice('join')}
      >
        Join Family
      </Button>
    </>
  );
}
