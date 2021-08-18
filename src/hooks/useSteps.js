import { useState } from 'react';

export default function useSteps(startAt = 1, numOfSteps) {
  const [step, setStep] = useState(startAt);

  const goToNextStep = () => {
    if (step === startAt + numOfSteps - 1) return;

    setStep(currentStep => currentStep + 1);
  };

  const goToPrevStep = () => {
    if (step === startAt) return;

    setStep(currentStep => currentStep - 1);
  };

  return { step, goToNextStep, goToPrevStep };
}
