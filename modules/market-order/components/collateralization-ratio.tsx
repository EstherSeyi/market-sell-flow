import InfoBlock from "./info-block";
import StyledInputLikeSection from "../styles/styled-input-like-section";

const CollateralizationRatio = () => {
  return (
    <InfoBlock title="collateralization ratio">
      <StyledInputLikeSection>
        <span className="collateralization-ratio__value">25</span>
        <span className="collateralization-ratio__percent">%</span>
      </StyledInputLikeSection>
    </InfoBlock>
  );
};

export default CollateralizationRatio;
