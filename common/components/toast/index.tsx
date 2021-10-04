import { useRouter } from "next/router";
import styled from "styled-components";

import Check from "../../../public/svgs/check.svg";

const StyledToast = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);

  .toast {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 5;
    background: #ffffff;
    border-radius: 6px;
    box-shadow: 0px 4px 10px rgba(222, 222, 222, 0.5);
    padding: 0.5em 1em;
    font-weight: 300;
    font-size: 0.75rem;
    width: 90%;
    max-width: 400px;
    height: 30vh;
  }
  .toast__icon {
    width: 64px;
    height: 64px;
    margin-bottom: 0.5em;
  }

  .toast__icon--success {
    color: #49d273;
  }
  .toast__text {
    text-align: center;
  }
  .home-button {
    background: none;
    text-decoration: underline;
    color: #4dadf3;
    margin-top: 0.5em;
  }
`;

const CustomToast = () => {
  const router = useRouter();
  return (
    <StyledToast>
      <div className="toast">
        <Check className="toast__icon toast__icon--success" />
        <div className="toast__text">
          <p>Success</p>
          <button className="home-button" onClick={() => router.push("/")}>
            Go Home
          </button>
        </div>
      </div>
    </StyledToast>
  );
};

export default CustomToast;
