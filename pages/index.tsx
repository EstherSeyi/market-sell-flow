import type { NextPage } from "next";
import styled from "styled-components";

import InfoBlock from "../modules/order-card/components/info-block";
import CollateralSlider from "../modules/order-card/components/collateral-section";
import TxAction from "../modules/order-card/components/tx-action";
import TxSummary from "../modules/order-card/components/tx-summary";
import DescriptionSection from "../modules/order-card/components/description-section";
import PageAction from "../modules/order-card/components/page-action";
import PositionSize from "../modules/order-card/components/position-size-section";
import CollateralizationRatio from "../modules/order-card/components/collateralization-ratio";
import SpotChange from "../modules/order-card/components/spot-change";
// import Toast from "../common/components/toast";

import { StyledSectionBox } from "../modules/order-card/styles/styled-box-section";

const Home: NextPage = () => {
  return (
    <Main>
      {/* <Toast /> */}
      <div className="page-content">
        <DescriptionSection />
        <StyledSectionBox>
          <div className="market-limit-tabs">
            <button className="market-tab">Market</button>
            <button className="limit-tab">Limit</button>
          </div>
          <div>
            <PositionSize />
            <CollateralizationRatio />
            <SpotChange />

            <CollateralSlider />

            <InfoBlock secondary title="Liquidation price">
              <span>~$146.79</span>
            </InfoBlock>
            <InfoBlock secondary title="Collateral">
              <span>$100.00</span>
            </InfoBlock>
            <TxAction />
            <TxSummary />
          </div>
        </StyledSectionBox>
      </div>
      <PageAction />
    </Main>
  );
};

const Main = styled.main`
  border: 1px solid rgba(220, 218, 233, 0.2);
  max-width: 400px;
  margin: 0 auto;
  margin-top: 1em;
  padding-top: 1em;

  .info-icon {
    color: rgba(119, 117, 126, 0.5);
    width: 14px;
    height: 14px;
  }
  .page-content {
    height: calc(100vh - 37px - 3rem);
    overflow-y: scroll;
  }

  .market-limit-tabs {
    display: flex;
  }
  .market-tab,
  .limit-tab {
    flex-basis: 50%;
    text-align: center;
    padding: 1em 0;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    line-height: 16px;
    font-weight: 300;
    cursor: pointer;

    background: rgba(220, 218, 233, 0.2);
    border-bottom: 1px solid rgba(41, 37, 53, 0.2);
    &:focus,
    &:active {
      background: transparent;
      border-style: none;
    }
    &:hover {
      font-weight: 500;
    }
  }

  .market-tab {
    border-right: 1px solid rgba(41, 37, 53, 0.2);
  }
  .limit-tab {
    border-left: 1px solid rgba(41, 37, 53, 0.2);
  }
`;

export default Home;
