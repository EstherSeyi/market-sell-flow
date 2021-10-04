import styled from "styled-components";

import Plus from "../../../public/svgs/plus.svg";
import Minus from "../../../public/svgs/minus.svg";

const ValueAdjuster = () => {
  return (
    <StyledContainer>
      <button className="value-adjuster-btn value-adjuster-btn--decreament">
        <Minus className="minus-icon" />
      </button>
      <button className="value-adjuster-btn value-adjuster-btn--increament">
        <Plus className="plus-icon" />
      </button>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  background: rgba(220, 218, 233, 0.4);
  border-radius: 32px;
  padding-left: 0.35em;
  display: flex;
  justify-content: space-between;

  .minus-icon,
  .plus-icon {
    width: 12px;
    height: 12px;
  }
  .minus-icon {
    color: var(--color-grey-3);
    opacity: 0.4;
  }
  .value-adjuster-btn {
    display: flex;
    align-items: center;
    padding: 0.25em;
  }
  .value-adjuster-btn--increament {
    background: var(--color-grey-3);
    border-radius: 9999px;
    padding: 0 0.25em;
    margin-left: 0.35em;
    font-weight: var(--fontweight-bold);
  }
`;

export default ValueAdjuster;
