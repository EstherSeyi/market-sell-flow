import styled from "styled-components";

import Safe from "../../../public/svgs/safe.svg";

import Slider from "../../../common/components/slider";

const StyledSection = styled.div`
  .collateral__header {
    color: #49d273;
  }
  .collateral__safe-icon {
    width: 16px;
    height: 16px;
  }
`;

const CollateralSlider = () => {
  return (
    <StyledSection>
      <div className="flex-justify-between">
        <div className="collateral__header">
          <Safe className="collateral__safe-icon" />
          <span className="collateral__header-safe">SAFE</span>
        </div>
        <span>Collateral %</span>
      </div>
      <Slider />
    </StyledSection>
  );
};

export default CollateralSlider;
