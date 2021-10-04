import styled from "styled-components";

import Safe from "../../../public/svgs/safe.svg";

import Slider from "../../../common/components/slider";

const CollateralSlider = () => {
  return (
    <StyledSection>
      <div className="collateral__header">
        <div className="collateral__header-safe">
          <Safe className="header-safe__icon" />
          <span className="header-safe__text">SAFE</span>
        </div>
        <span className="collateral__header-text">Collateral %</span>
      </div>
      <Slider />
    </StyledSection>
  );
};

export default CollateralSlider;

const StyledSection = styled.div`
  .collateral__header,
  .collateral__header-safe {
    display: flex;
  }
  .collateral__header {
    justify-content: space-between;
    align-items: center;
  }
  .collateral__header-safe {
    color: var(--color-green-1);
    align-items: center;
  }
  .header-safe__icon {
    width: 16px;
    height: 16px;
    margin-right: 0.25em;
  }
  .header-safe__text {
    font-size: 0.75em;
    align-self: flex-end;
  }
  .collateral__header-text {
    font-size: 0.625rem;
    color: var(--color-grey-3);
    font-weight: var(--fontweight-medium);
    line-height: 14px;
  }
`;
