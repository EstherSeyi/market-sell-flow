import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../../common/components/button";

import ConnectWallet from "./connect-wallet";

import { useStep } from "../custom-hooks/use-step";

const PageAction = () => {
  const { currentStep, handleCurrentStep } = useStep();
  const [walletIsConnected, setWalletIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState({});

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      /*
       * Check if we're authorized to access the user's wallet
       */
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        setWalletIsConnected(true);
        setCurrentAccount(accounts[0]);
        handleCurrentStep(1);
      } else {
        setWalletIsConnected(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [walletIsConnected]);

  return (
    <StyledContainer className="page-action__container">
      {!walletIsConnected ? (
        <ConnectWallet
          setCurrentAccount={setCurrentAccount}
          setWalletIsConnected={setWalletIsConnected}
          // setStage={setStage}
        />
      ) : currentStep === 1 ? (
        <Button
          className="page-action__btn"
          onClick={() => handleCurrentStep(currentStep + 1)}
        >
          Enable WETH Wrapper
        </Button>
      ) : currentStep === 2 ? (
        <Button
          className="page-action__btn"
          onClick={() => handleCurrentStep(currentStep + 1)}
        >
          APPROVE COLLATERAL
        </Button>
      ) : currentStep === 3 ? (
        <Button
          className="page-action__btn"
          onClick={() => handleCurrentStep(currentStep + 1)}
        >
          PERMIT OTOKEN
        </Button>
      ) : currentStep === 3 ? (
        <Button
          className="page-action__btn"
          onClick={() => handleCurrentStep(currentStep + 1)}
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
