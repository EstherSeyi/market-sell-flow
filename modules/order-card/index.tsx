import { useState } from "react";
import styled from "styled-components";

import InfoBlock from "./components/info-block";
import CollateralSlider from "./components/collateral-section";
import TxAction from "./components/tx-action";
import TxSummary from "./components/tx-summary";
import DescriptionSection from "./components/description-section";
import PositionSize from "./components/position-size-section";
import CollateralizationRatio from "./components/collateralization-ratio";
import SpotChange from "./components/spot-change";
import PageAction from "./components/page-action";

import { StyledSectionBox } from "./styles/styled-box-section";
import { StyledMarketOrderSection } from "./styles/styled-market-order-section";

import data from "./static/dummy-data.json";
import formatNumber from "./utils/format-number";
import { i18nUSDCurrencyFormat } from "../../common/utils/format-currency";

const MarketOrder = () => {
  const [currentTab, setCurrentTab] = useState("market");
  return (
    <StyledMarketOrderSection>
      <div className="page-content">
        <DescriptionSection />
        <StyledSectionBox>
          <div className="market-limit-tabs">
            <button
              className={`market-tab ${
                currentTab === "market" ? "tab--focused" : ""
              }`}
              onClick={() => setCurrentTab("market")}
            >
              Market
            </button>
            <button
              className={`limit-tab ${
                currentTab === "limit" ? "tab--focused" : ""
              }`}
              onClick={() => setCurrentTab("limit")}
            >
              Limit
            </button>
          </div>
          <div>
            <PositionSize />
            <CollateralizationRatio />
            <SpotChange />

            <CollateralSlider />

            <InfoBlock secondary title="Liquidation price">
              <span>
                ~
                {i18nUSDCurrencyFormat.format(
                  Number(formatNumber(data.liquidation_price, 2))
                ) ?? 0}
              </span>
            </InfoBlock>
            <InfoBlock secondary title="Collateral">
              <span>{i18nUSDCurrencyFormat.format(data.collateral)}</span>
            </InfoBlock>
            <TxAction />
            <TxSummary />
          </div>
        </StyledSectionBox>
      </div>
      <PageAction />
    </StyledMarketOrderSection>
  );
};

export default MarketOrder;
