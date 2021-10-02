import type { NextPage } from "next";
import styled from "styled-components";

import Button from "../common/components/button/button";
import InfoBlock from "../modules/order-card/components/info-block";
import CollateralSlider from "../modules/order-card/components/collateral-section";

import PutIcon from "../public/svgs/alt-inverted-arrows.svg";
import Info from "../public/svgs/info.svg";

const Main = styled.main`
  width: 95%;
  max-width: 400px;
  margin: 0 auto;
  padding: 1em;
  margin-top: 1em;

  .topic-container {
    display: flex;
    align-items: center;
  }
  .topic {
    font-weight: 500;
    margin-right: 0.5em;
    font-size: 1.5rem;
  }

  .info-icon {
    color: #dcdae9;
    width: 14px;
    height: 14px;
  }

  .section-box-style {
    box-shadow: 0px 4px 10px rgba(222, 222, 222, 0.5);
    border-radius: 4px;
    padding: 1em;
    margin-bottom: 1em;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <Main>
        <div className="section-box-style">
          <div className="topic-container">
            <h1 className="topic">Order Card</h1>
            <Info className="info-icon" />
          </div>
          <div>
            <Button>Buy</Button>
            <Button>Sell</Button>
            <div>
              <span>WETH</span>
              <span>FRI, 30 APR 2021</span>
            </div>
            <div>
              <PutIcon />
              <span>PUT</span>
              <span>--</span>
              <span>$2080 STRIKE</span>
            </div>
            <div>
              <Info className="info-icon" />
              <div>
                To create a spread, select another option.
                <a href="#">Learn more</a>
              </div>
            </div>
          </div>
        </div>
        <div className="section-box-style">
          <div>
            <p>Market</p>
            <p>Limit</p>
          </div>
          <div>
            <InfoBlock title="position size">
              <div className="flex-justify-between">
                <span>oToken Balance: </span>
                <span>21.042</span>
              </div>
              <div className="flex-justify-between">
                <span>100.00</span>
                <div>
                  <span>MAX</span>
                  <span>oTokens</span>
                </div>
              </div>
            </InfoBlock>

            <InfoBlock title="collateralization ratio">
              <div className="flex-justify-between">
                <span>25</span>
                <span>%</span>
              </div>
            </InfoBlock>
            <InfoBlock title="spot change">
              <div className="flex-justify-between">
                <div>
                  <span>-</span>
                  <span>+</span>
                </div>
                <span>25</span>
              </div>
            </InfoBlock>
            <CollateralSlider />
          </div>
        </div>
      </Main>
    </>
  );
};

export default Home;
