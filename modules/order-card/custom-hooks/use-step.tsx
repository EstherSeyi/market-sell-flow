import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
} from "react";

const StepContext = createContext<{
  currentStep: number;
  handleCurrentStep: (step: number) => void;
}>({
  currentStep: 1,
  handleCurrentStep: () => 1,
});

const StepProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    if (currentStep > 4) {
      setCurrentStep(1);
    }
  }, [currentStep]);

  const handleCurrentStep = (step: number) => {
    setCurrentStep(step);
  };

  return (
    <StepContext.Provider value={{ handleCurrentStep, currentStep }}>
      {children}
    </StepContext.Provider>
  );
};

const useStep = () => useContext(StepContext);
export { StepProvider, useStep };
