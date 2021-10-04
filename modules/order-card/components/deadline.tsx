import styled from "styled-components";

import CaretDown from "../../../public/svgs/caret-down.svg";

const Deadline = () => {
  return (
    <StyledDeadlineAction>
      <input className="deadline-value" value={300} />

      <div className="deadline-metric">
        <span>seconds</span>
        <button>
          <CaretDown className="caret-icon" />
        </button>
      </div>
    </StyledDeadlineAction>
  );
};

export default Deadline;

const StyledDeadlineAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5em;

  .deadline-value {
    font-weight: 300;
    line-height: 22px;
    border-style: none;
    color: #292535;
    width: 50%;
    &:focus {
      outline: none;
    }
  }
  .deadline-metric {
    font-family: Roboto;
    font-weight: 300;
    font-size: 0.75rem;
    line-height: 14px;
    color: #4dadf3;
    display: flex;
    align-items: center;
  }

  .caret-icon {
    width: 10px;
    height: 8px;
    margin-left: 0.5em;
  }
`;
