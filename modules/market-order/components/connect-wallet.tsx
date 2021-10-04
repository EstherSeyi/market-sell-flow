import { useState } from "react";
import Button from "../../../common/components/button";

import { useStep } from "../custom-hooks/use-step";

const ConnectWallet = ({
  setCurrentAccount,
  setWalletIsConnected,
}: {
  setCurrentAccount: (currAccount: string) => void;
  setWalletIsConnected: (isConnected: boolean) => void;
}) => {
  const { handleCurrentStep } = useStep();
  const [connecting, setConnecting] = useState(false);
  const handleConnectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please get the Metamask browser extension");
        return;
      }
      setConnecting(true);

      const accounts = ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
      setWalletIsConnected(true);
      handleCurrentStep(1);
      setConnecting(false);
    } catch (error) {
      setConnecting(false);
      console.log(error);
    }
  };

  return (
    <Button
      className="page-action__btn"
      color="#CD6116"
      onClick={handleConnectWallet}
      isLoading={connecting}
    >
      CONNECT TO METAMASK
    </Button>
  );
};

export default ConnectWallet;