import styled from "styled-components";

import ConnectWallet from "./connect-wallet";

const PageAction = () => {
  return (
    <StyledContainer className="page-action__container">
      <ConnectWallet />
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
