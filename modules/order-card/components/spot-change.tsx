import InfoBlock from "./info-block";
import ValueAdjuster from "../../../common/components/value-adjuster";

import StyledInputLikeSection from "../styles/styled-input-like-section";

const SpotChange = () => {
  return (
    <InfoBlock title="collateralization ratio">
      <StyledInputLikeSection>
        <ValueAdjuster />

        <div className="spot-change__value-container">
          <span className="spot-change__value">25</span>
          <span className="spot-change__percent">%</span>
        </div>
      </StyledInputLikeSection>
    </InfoBlock>
  );
};

export default SpotChange;
