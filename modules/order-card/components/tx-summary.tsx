import styled from "styled-components";

import Info from "../../../public/svgs/info.svg";

import data from "../static/dummy-data.json";
import formatNumber from "../utils/format-number";

const TxSummary = () => {
  return (
    <Styles>
      <div className="tx-summary-container">
        <h3 className="tx-summary__title">Tx Summary</h3>
        <div className="tx-summary__premium">
          <div className="tx-summary__premium-title">
            <span className="tx-summary__premium-title-text">
              Premium/oToken
            </span>
            <Info className="info-icon" />
          </div>
          <p className="tx-summary__premium-subtitle">USDC</p>
        </div>
        <div className="tx-summary__others-section">
          <div className="tx-summary__others-item">
            <div className="other-items__title-section">
              <span className="other-items__title">Est. Total Cost</span>
              <Info className="info-icon" />
            </div>
            <div className="other-items__value-section">
              <span className="other-items__value">
                {formatNumber(data.estimated_total_cost, 3)}
              </span>

              <span className="other-items__value-currency">USDC</span>
            </div>
          </div>
          <div className="tx-summary__others-item">
            <div className="other-items__title-section">
              <span className="other-items__title">Market Impact</span>
              <Info className="info-icon" />
            </div>
            <div className="other-items__value-section">
              <span className="other-items__value">
                {formatNumber(data.market_impact, 2)}%
              </span>
            </div>
          </div>
          <div className="tx-summary__others-item">
            <div className="other-items__title-section">
              <span className="other-items__title">0x Protocol Fee</span>
              <Info className="info-icon" />
            </div>
            <div className="other-items__value-section">
              <span className="other-items__value">
                {formatNumber(data["0x_protocol_fee"], 4)}
              </span>
              <span className="other-items__value-currency">ETH</span>
            </div>
          </div>
          <div className="tx-summary__others-item">
            <div className="other-items__title-section">
              <span className="other-items__title">Collateral</span>
              <Info className="info-icon" />
            </div>
            <div className="other-items__value-section">
              <span className="other-items__value">
                {formatNumber(data.tx_summary_collateral, 5)}
              </span>
              <span className="other-items__value-currency">USDC</span>
            </div>
          </div>
        </div>
      </div>
      <div className="tx-summary__total-receive">
        <div className="tx-summary__total-receive-container">
          <div className="other-items__title-section--total">
            <span className="other-items__title other-items__title">
              Total to Receive
            </span>
            <Info className="info-icon" />
          </div>
          <div className="other-items__value-section">
            <span className="other-items__value--total">
              {formatNumber(data.total_to_receive, 3)}
            </span>
            <span className="other-items__value-currency">
              {data["0x_protocol_fee"] >= 0 && "+"}
              {formatNumber(data["0x_protocol_fee"], 4)} ETH
            </span>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default TxSummary;

const Styles = styled.div`
  margin: 1em 0;
  padding-top: 1em;
  color: var(--color-grey-3);
  background: rgba(220, 218, 233, 0.2);
  border-radius: 4px;
  .tx-summary-container,
  .tx-summary__total-receive-container {
    width: 95%;
    margin: 0 auto;
    font-size: 0.75rem;
    padding-bottom: 0.5em;
  }

  .tx-summary__title {
    font-weight: var(--fontweight-medium);
    line-height: 16px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-dark);
    margin-bottom: 1em;
  }

  .tx-summary__premium {
    border-bottom: 1px solid var(--color-grey-1);
    padding-bottom: 0.5em;
    margin-bottom: 0.75em;
  }

  .tx-summary__premium-title {
    color: var(--color-dark);
    display: flex;
    align-items: center;
  }
  .tx-summary__premium-subtitle {
    font-weight: var(--fontweight-reg);
    font-size: 0.875rem;
    line-height: 16px;
  }
  .tx-summary__premium-subtitle {
    font-family: var(--fontfamily-secondary);
  }
  .tx-summary__premium-title-text {
    margin-right: 0.25em;
  }
  .tx-summary__total-receive {
    background: rgba(220, 218, 233, 0.4);
  }
  .tx-summary__total-receive-container {
    padding: 0.5em 0;
  }
  .tx-summary__others-item {
    margin-bottom: 1em;
  }

  .other-items__title-section {
    display: flex;
    align-items: center;
    margin-bottom: 0.25em;
  }

  .other-items__title {
    margin-right: 0.5em;
  }
  .other-items__value {
    font-size: 0.875rem;
    margin-right: 0.25em;
    line-height: 19px;
    font-weight: var(--fontweight-reg);
    margin-bottom: 0.25rem;
  }

  .other-items__value-currency {
    font-size: 0.625rem;
    font-family: var(--fontfamily-secondary);
    font-weight: var(--fontweight-reg);
    line-height: 12px;
  }
  .other-items__title-section--total {
    margin-bottom: 0.5em;
  }
  .other-items__value--total {
    color: var(--color-dark);
    font-weight: var(--fontweight-bold);
    margin-right: 0.5em;
  }
`;
