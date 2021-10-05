import { useState } from "react";

import { useStep } from "../custom-hooks/use-step";

import Button from "../../../common/components/button";
import Toast from "../../../common/utils/toast.helper";

const ConnectWallet = ({
  setWalletIsConnected,
}: {
  setWalletIsConnected: (isConnected: boolean) => void;
}) => {
  const { setInitialStep } = useStep();
  const [connecting, setConnecting] = useState(false);
  const handleConnectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        return Toast({
          message: "Please get the Metamask browser extension",
          type: "error",
        });
      }
      setConnecting(true);
      const accounts = ethereum.request({
        method: "eth_requestAccounts",
      });

      setWalletIsConnected(true);
      setInitialStep();
      setConnecting(false);
      Toast({
        message: `Connected ${accounts[0]}`,
        type: "error",
      });
    } catch (error) {
      setConnecting(false);
      Toast({
        message: error instanceof Error ? error.message : "Connection Failed!",
        type: "error",
      });
    }
  };

  return (
    <Button
      className="page-action__btn"
      color="var(--color-brown)"
      onClick={handleConnectWallet}
      isLoading={connecting}
    >
      CONNECT TO METAMASK
    </Button>
  );
};

export default ConnectWallet;
