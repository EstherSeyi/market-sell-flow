import styled from "styled-components";

import Check from "../../../public/svgs/check.svg";

const StyledToast = styled.div`
  position: fixed;
  top: 32px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;

  .toast {
    display: flex;
    align-items: center;
    z-index: 2;
    background: #ffffff;
    border-radius: 6px;
    box-shadow: 0px 4px 10px rgba(222, 222, 222, 0.5);
    padding: 0.5em 1em;
    font-weight: 300;
    font-size: 0.75rem;
  }
  .toast__icon {
    width: 24px;
    height: 24px;
    margin-right: 0.5em;
  }

  .toast__icon--success {
    color: #49d273;
  }
`;

const CustomToast = () => {
  return (
    <StyledToast>
      <div className="toast">
        <Check className="toast__icon toast__icon--success" />
        <span>Successfull operation</span>
      </div>
    </StyledToast>
  );
};

export default CustomToast;
