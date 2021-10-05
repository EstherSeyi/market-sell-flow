import { useState } from "react";
import styled from "styled-components";

import Button from "../../../common/components/button";
import { StyledSectionBox } from "../styles/styled-box-section";

import PutIcon from "../../../public/svgs/alt-inverted-arrows.svg";
import Info from "../../../public/svgs/info.svg";

import { disabledStyle } from "../../../common/components/button";
import data from "../static/dummy-data.json";
import formatExpiryDate from "../utils/format-expiry-date";

const DescriptionSection = () => {
  const [currentAction, setCurrentAction] = useState("sell");
  return (
    <Styles>
      <div className="description__topic-container">
        <h1 className="description__topic">Order Card</h1>
        <Info className="info-icon" />
      </div>
      <div>
        <div className="description__btns">
          <Button
            className={`description__btn--buy description__btn ${
              currentAction === "buy" ? "focus-sell-btn" : ""
            }`}
            onClick={() => setCurrentAction("buy")}
          >
            Buy
          </Button>
          <Button
            className={`description__btn--sell description__btn ${
              currentAction === "sell" ? "focus-sell-btn" : ""
            }`}
            onClick={() => setCurrentAction("sell")}
          >
            Sell
          </Button>
        </div>
        <div className="description__token-date">
          <span className="description__token">WETH</span>
          <span className="description__date">
            {formatExpiryDate(data.expiry_date)}
          </span>
        </div>
        <div className="description__strike-section">
          <PutIcon className="description__strike-icon" />
          <span className="description__strike-text">PUT</span>
          <span className="description__strike-dash">--</span>
          <span className="description__strike-value">
            ${data.strike} STRIKE
          </span>
        </div>
        <div className="description__info">
          <Info className="info-icon description__info-icon" />
          <div className="description__info-text">
            To create a spread, select another option.
            <a href="#" className="description__info-link">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </Styles>
  );
};

const Styles = styled(StyledSectionBox)`
  .description__topic-container,
  .description__btns,
  .description__info {
    display: flex;
  }
  .description__topic,
  .description__info-link {
    font-weight: var(--fontweight-medium);
  }

  .description__topic-container {
    align-items: center;
    margin-bottom: 2em;
  }
  .description__topic {
    margin-right: 0.25em;
    font-size: 1.5rem;
  }
  .description__btns {
    margin-bottom: 1em;
  }
  .description__btn {
    font-weight: var(--fontweight-bold);
    line-height: 19px;
  }

  .description__btn--buy {
    border: 1px solid var(--color-green-1);
    background: var(--color-light);
    color: var(--color-green-1);
    margin-right: 1em;
    flex-basis: 50%;

    &:hover,
    &:focus {
      background: var(--color-green-2);
    }
    ${disabledStyle()}
  }
  .description__btn--sell {
    border: 1px solid var(--color-red);
    background: var(--color-light);
    color: var(--color-red);
    margin-right: 1em;
    flex-basis: 50%;
    &:hover,
    &:focus {
      background: var(--color-red);
      color: var(--color-light);
    }
    ${disabledStyle()}
  }
  .focus-sell-btn {
    background: var(--color-red);
    color: var(--color-light);
  }
  .focus-buy-btn {
    background: var(--color-green-2);
  }
  .description__token {
    font-size: 1.125rem;
    font-weight: var(--fontweight-bold);
    margin-right: 0.5em;
  }
  .description__date {
    font-size: 0.75rem;
    color: var(--color-grey-3);
    text-transform: uppercase;
  }
  .description__token-date {
    margin-bottom: 0.75em;
  }
  .description__strike-icon {
    margin-right: 0.25em;
  }

  .description__strike-text,
  .description__strike-value,
  .description__strike-dash {
    font-weight: var(--fontweight-reg);
    color: var(--color-dark);
    font-size: 0.75rem;
    line-height: 16px;
    margin-right: 0.25em;
  }
  .description__strike-text {
    margin-right: 0.5em;
  }
  .description__info {
    font-size: 0.75rem;
    font-weight: var(--fontweight-reg);
    line-height: 16px;
    margin-top: 0.8125em;
    color: var(--color-dark);
  }
  .description__info-icon {
    margin-right: 0.25em;
  }
  .description__info-link {
    color: var(--color-dark);
    margin-left: 0.125em;
  }
`;

export default DescriptionSection;
