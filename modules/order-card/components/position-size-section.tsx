import { useState } from "react";
import styled from "styled-components";

import InfoBlock from "./info-block";

import data from "../static/dummy-data.json";
import formatNumber from "../utils/format-number";

const StyledContainer = styled.div`
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
    width: 50%;
    font-size: 20px;
    line-height: 20px;
    border-style: none;
    color: #292535;
    &:focus {
      outline: none;
    }
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
`;

const PositionSize = () => {
  const [positionSize, setPositionSize] = useState("100");
  const handlePositionSize = (event: React.FormEvent<HTMLInputElement>) => {
    let target = event.target as HTMLInputElement;
    setPositionSize(target.value);
  };

  return (
    <InfoBlock title="position size">
      <StyledContainer>
        <div className="position-size__otoken-section">
          <span className="position-size__otoken-text">oToken Balance: </span>
          <span className="position-size__otoken-bal">
            {formatNumber(data.oToken_balance, 3)}
          </span>
        </div>
        <div className="position-size__max-otoken">
          <input
            className="position-size__max-otoken-value"
            onChange={handlePositionSize}
            value={positionSize}
            type="number"
          />
          <div className="position-size__max-otoken-text">
            <span className="position-size__max">MAX</span>
            <span>oTokens</span>
          </div>
        </div>
      </StyledContainer>
    </InfoBlock>
  );
};

export default PositionSize;
