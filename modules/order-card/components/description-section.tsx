import styled from "styled-components";

import Button from "../../../common/components/button";
import { StyledSectionBox } from "../styles/styled-box-section";

import PutIcon from "../../../public/svgs/alt-inverted-arrows.svg";
import Info from "../../../public/svgs/info.svg";

import { disabledStyle } from "../../../common/components/button";
import data from "../static/dummy-data.json";
import formatExpiryDate from "../utils/format-expiry-date";

const DescriptionSection = () => {
  return (
    <Styles>
      <div className="description__topic-container">
        <h1 className="description__topic">Order Card</h1>
        <Info className="info-icon" />
      </div>
      <div>
        <div className="description__btns">
          <Button className="description__btn--buy description__btn">
            Buy
          </Button>
          <Button className="description__btn--sell description__btn">
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
    font-weight: 500;
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
    font-weight: 800;
    line-height: 19px;
  }

  .description__btn--buy {
    border: 1px solid #49d273;
    background: #ffffff;
    color: #49d273;
    margin-right: 1em;
    flex-basis: 50%;

    &:hover,
    &:focus {
      background: #b2f0c5;
    }
    ${disabledStyle()}
  }
  .description__btn--sell {
    border: 1px solid #ec7987;
    background: #ffffff;
    color: #ec7987;
    margin-right: 1em;
    flex-basis: 50%;
    &:hover,
    &:focus {
      background: #ec7987;
      color: #ffffff;
    }
    ${disabledStyle()}
  }
  .description__token {
    font-size: 1.125rem;
    font-weight: 800;
    margin-right: 0.5em;
  }
  .description__date {
    font-size: 0.75rem;
    color: #77757e;
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
    font-weight: 300;
    color: #292535;
    font-size: 0.75rem;
    line-height: 16px;
    margin-right: 0.25em;
  }
  .description__strike-text {
    margin-right: 0.5em;
  }
  .description__info {
    font-size: 0.75rem;
    font-weight: 300;
    line-height: 16px;
    margin-top: 0.8125em;
    color: #292535;
  }
  .description__info-icon {
    margin-right: 0.25em;
  }
  .description__info-link {
    color: #292535;
    margin-left: 0.125em;
  }
`;

export default DescriptionSection;
