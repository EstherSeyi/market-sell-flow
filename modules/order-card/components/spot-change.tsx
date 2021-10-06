import { useState } from "react";

import InfoBlock from "./info-block";
import ValueAdjuster from "../../../common/components/value-adjuster";

import StyledInputLikeSection from "../styles/styled-input-like-section";

const SpotChange = ({
  handleValue,
  spotChange,
}: {
  spotChange: number;
  handleValue: (type: string) => void;
}) => {
  return (
    <InfoBlock title="spot change">
      <StyledInputLikeSection>
        <ValueAdjuster handleValue={handleValue} />

        <div className="spot-change__value-container">
          <span className="spot-change__value">{spotChange}</span>
          <span className="spot-change__percent">%</span>
        </div>
      </StyledInputLikeSection>
    </InfoBlock>
  );
};

export default SpotChange;
