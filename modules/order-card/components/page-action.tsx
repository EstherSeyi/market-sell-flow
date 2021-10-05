import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../../common/components/button";

import ConnectWallet from "./connect-wallet";

import { useStep } from "../custom-hooks/use-step";
import Toast from "../../../common/utils/toast.helper";

const PageAction = () => {
  const { currentStep, handleCurrentStep, setInitialStep, loading } = useStep();
  const [walletIsConnected, setWalletIsConnected] = useState(false);

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        return Toast({
          message: "Please get the Metamask browser extension",
          type: "error",
        });
      }

      /*
       * Check if we're authorized to access the user's wallet
       */
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        setWalletIsConnected(true);
        setInitialStep();
      } else {
        setWalletIsConnected(false);
      }
    } catch (error) {
      Toast({
        message: error instanceof Error ? error.message : "Process Failed",
        type: "error",
      });
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [walletIsConnected]);

  useEffect(() => {
    (() => {
      if (window.ethereum) {
        window.ethereum.on("accountsChanged", async (accounts: string[]) => {
          if (accounts.length > 0) {
            setWalletIsConnected(true);
          } else {
            setWalletIsConnected(false);
          }
        });
      }
    })();
  }, []);

  return (
    <StyledContainer className="page-action__container">
      {!walletIsConnected ? (
        <ConnectWallet setWalletIsConnected={setWalletIsConnected} />
      ) : currentStep === 1 ? (
        <Button
          className="page-action__btn"
          onClick={() => handleCurrentStep(currentStep + 1)}
          isLoading={loading}
        >
          Enable WETH Wrapper
        </Button>
      ) : currentStep === 2 ? (
        <Button
          className="page-action__btn"
          onClick={() => handleCurrentStep(currentStep + 1)}
          isLoading={loading}
        >
          APPROVE COLLATERAL
        </Button>
      ) : currentStep === 3 ? (
        <Button
          className="page-action__btn"
          onClick={() => handleCurrentStep(currentStep + 1)}
          isLoading={loading}
        >
          PERMIT OTOKEN
        </Button>
      ) : currentStep === 3 ? (
        <Button
          className="page-action__btn"
          onClick={() => handleCurrentStep(currentStep + 1)}
          isLoading={loading}
        >
          SUBMIT TRADE
        </Button>
      ) : null}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  box-shadow: 0px 4px 10px rgba(222, 222, 222, 0.5);
  padding: 1em;

  .page-action__btn {
    width: 100%;
  }
`;

export default PageAction;
