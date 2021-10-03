import styled from "styled-components";

import Info from "../../../public/svgs/info.svg";

const Styles = styled.div`
  margin: 1em 0;
  padding-top: 1em;
  color: #77757e;
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
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #292535;
    margin-bottom: 1em;
  }

  .tx-summary__premium {
    border-bottom: 1px solid #dcdae9;
    padding-bottom: 0.5em;
    margin-bottom: 0.75em;
  }

  .tx-summary__premium-title {
    color: #292535;
    display: flex;
    align-items: center;
  }
  .tx-summary__premium-subtitle {
    font-weight: 300;
    font-size: 0.875rem;
    line-height: 16px;
  }
  .tx-summary__premium-subtitle {
    font-family: Roboto;
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
    font-weight: 300;
    margin-bottom: 0.25rem;
  }

  .other-items__value-currency {
    font-size: 0.625rem;
    font-family: Roboto;
    font-weight: 300;
    line-height: 12px;
  }
  .other-items__title-section--total {
    margin-bottom: 0.5em;
  }
  .other-items__value--total {
    color: #292535;
    font-weight: 800;
    margin-right: 0.5em;
  }
`;

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
              <span className="other-items__value">103.937</span>
              <span className="other-items__value-currency">USDC</span>
            </div>
          </div>
          <div className="tx-summary__others-item">
            <div className="other-items__title-section">
              <span className="other-items__title">Market Impact</span>
              <Info className="info-icon" />
            </div>
            <div className="other-items__value-section">
              <span className="other-items__value">0.02%</span>
            </div>
          </div>
          <div className="tx-summary__others-item">
            <div className="other-items__title-section">
              <span className="other-items__title">0x Protocol Fee</span>
              <Info className="info-icon" />
            </div>
            <div className="other-items__value-section">
              <span className="other-items__value">0.0983</span>
              <span className="other-items__value-currency">ETH</span>
            </div>
          </div>
          <div className="tx-summary__others-item">
            <div className="other-items__title-section">
              <span className="other-items__title">Collateral</span>
              <Info className="info-icon" />
            </div>
            <div className="other-items__value-section">
              <span className="other-items__value">0.00234</span>
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
            <span className="other-items__value--total">113.532</span>
            <span className="other-items__value-currency">+0.0983 ETH</span>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default TxSummary;
