import type { NextPage } from "next";
import styled from "styled-components";

import Button from "../common/components/button";
import InfoBlock from "../modules/order-card/components/info-block";
import CollateralSlider from "../modules/order-card/components/collateral-section";
import TxAction from "../modules/order-card/components/tx-action";
import TxSummary from "../modules/order-card/components/tx-summary";
import DescriptionSection from "../modules/order-card/components/description-section";
import ValueAdjuster from "../common/components/value-adjuster";

import { StyledSectionBox } from "../modules/order-card/styles/styled-box-section";

const Home: NextPage = () => {
  return (
    <Main>
      <div className="page-content">
        <DescriptionSection />
        <StyledSectionBox>
          <div className="market-limit-tabs">
            <button className="market-tab">Market</button>
            <button className="limit-tab">Limit</button>
          </div>
          <div>
            <InfoBlock title="position size">
              <div className="position-size__otoken-section">
                <span className="position-size__otoken-text">
                  oToken Balance:{" "}
                </span>
                <span className="position-size__otoken-bal">21.042</span>
              </div>
              <div className="position-size__max-otoken">
                <span className="position-size__max-otoken-value">100.00</span>
                <div className="position-size__max-otoken-text">
                  <span className="position-size__max">MAX</span>
                  <span>oTokens</span>
                </div>
              </div>
            </InfoBlock>

            <InfoBlock title="collateralization ratio">
              <div className="collateralization-ratio">
                <span className="collateralization-ratio__value">25</span>
                <span className="collateralization-ratio__percent">%</span>
              </div>
            </InfoBlock>
            <InfoBlock title="spot change">
              <div className="spot-change">
                <ValueAdjuster />

                <div className="spot-change__value-container">
                  <span className="spot-change__value">25</span>
                  <span className="spot-change__percent">%</span>
                </div>
              </div>
            </InfoBlock>
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
      <div className="page-action__container">
        <Button className="page-action__btn" color="#CD6116">
          CONNECT TO METAMASK
        </Button>
      </div>
    </Main>
  );
};

const Main = styled.main`
  border: 1px solid rgba(220, 218, 233, 0.2);
  max-width: 400px;
  margin: 0 auto;

  .info-icon {
    color: rgba(119, 117, 126, 0.5);
    width: 14px;
    height: 14px;
  }
  .page-content {
    height: calc(100vh - 37px - 3rem);
    overflow-y: scroll;
  }

  .page-action__container {
    box-shadow: 0px 4px 10px rgba(222, 222, 222, 0.5);
    padding: 1em;
  }
  .page-action__btn {
    width: 100%;
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

  .position-size__otoken-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(220, 218, 233, 0.3);
    padding: 0.25em;
    border-radius: 2px;
    color: #77757e;
    margin-bottom: 0.6875em;
  }
  .position-size__otoken-text {
    font-size: 0.625rem;
    line-height: 14px;
  }
  .position-size__otoken-bal {
    font-size: 0.75rem;
    font-weight: 800;
    line-height: 12px;
  }

  .position-size__max-otoken {
    display: flex;
    justify-content: space-between;
    margin: 0 0.5em;
  }

  .position-size__max-otoken-value {
    font-size: 20px;
    line-height: 20px;
  }
  .position-size__max-otoken-text {
    font-size: 0.625rem;
  }
  .position-size__max {
    font-size: 0.5rem;
    padding: 0.25em;
    color: #4dadf3;
    border: 1px solid #4dadf3;
    border-radius: 4px;
    margin-right: 0.5em;
  }
  .collateralization-ratio,
  .spot-change {
    display: flex;
    justify-content: space-between;
    margin: 0 0.5em;
    align-items: center;
  }

  .collateralization-ratio__value,
  .spot-change__value {
    color: #292535;
    font-size: 1rem;
    font-weight: 300;
    line-height: 22px;
  }
  .collateralization-ratio__percent,
  .spot-change__percent {
    font-size: 0.75rem;
    line-height: 16px;
    color: #77757e;
  }
  .spot-change__value-container {
    display: flex;
    align-items: center;
  }
  .spot-change__value {
    margin-right: 0.5em;
  }
`;

export default Home;
