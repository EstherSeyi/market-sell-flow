import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
} from "react";

import Toast from "../../../common/utils/toast.helper";

const StepContext = createContext<{
  currentStep: number;
  handleCurrentStep: (step: number) => void;
  setInitialStep: () => void;
  loading: boolean;
}>({
  currentStep: 1,
  handleCurrentStep: () => null,
  setInitialStep: () => null,
  loading: false,
});

const StepProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentStep > 4) {
      setCurrentStep(1);
    }
  }, [currentStep]);

  const setInitialStep = () => {
    setCurrentStep(1);
  };
  const handleCurrentStep = (step: number) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentStep(step);
      setLoading(false);
    }, 1000);
  };

  return (
    <StepContext.Provider
      value={{ handleCurrentStep, currentStep, loading, setInitialStep }}
    >
      {children}
    </StepContext.Provider>
  );
};

const useStep = () => useContext(StepContext);
export { StepProvider, useStep };
