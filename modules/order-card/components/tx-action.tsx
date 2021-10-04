import styled, { css } from "styled-components";

import Bullet from "../../../public/svgs/bullet.svg";
import Info from "../../../public/svgs/info.svg";
import Check from "../../../public/svgs/check-circle.svg";

import { useStep } from "../custom-hooks/use-step";

const Styled = styled.div`
  margin: 1em 0 1.5em 0;
  .txaction__icon {
    width: 16px;
    height: 16px;
    color: #77757e;
    margin-right: 0.25em;
  }
  .txaction__icon--info--disabled {
    color: #77757e;
  }

  .tx-action__title {
    font-weight: 300;
    font-size: 0.75em;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #292535;
    margin-bottom: 0.5625em;
  }
  .txaction__item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5em;
    color: #292535;
  }
  .txaction__item-text {
    font-family: Roboto;
  }
`;
const StyledItem = styled.li<{ isCurrent: boolean }>`
  .txaction__item-text {
    flex-basis: 80%;
    font-weight: 300;
    font-size: 0.75rem;
    line-height: 14px;
    font-weight: 300;
    color: #77757e;

    ${({ isCurrent }) =>
      isCurrent &&
      css`
        text-decoration: underline;
        color: #292535;
        font-weight: 800;
      `}
  }

  .txaction__icon {
    ${({ isCurrent }) =>
      isCurrent &&
      css`
        color: #292535;
      `}
  }
  .txaction__icon--info {
    color: rgba(119, 117, 126, 0.5);
    margin-right: 0;
  }
`;

const steps = [
  "1. Enable WETH Wrapper",
  "2. Approve collateral to Opyn Contracts",
  "3. Permit oToken to wrapper contracts",
  "4. Permit, deposit, mint & trade",
];

const TxAction = () => {
  return (
    <Styled>
      <h3 className="tx-action__title">Tx Action</h3>
      <ul>
        {steps.map((item, index) => (
          <TxActionItem text={item} key={item} step={index + 1} />
        ))}
      </ul>
    </Styled>
  );
};

const TxActionItem = ({ text, step }: { text: string; step: number }) => {
  const { currentStep } = useStep();
  return (
    <StyledItem isCurrent={step === currentStep} className="txaction__item ">
      {step === 4 ? (
        <Check className="txaction__icon" />
      ) : (
        <Bullet className="txaction__icon" />
      )}

      <span className="txaction__item-text">{text}</span>

      <Info className="txaction__icon txaction__icon--info" />
    </StyledItem>
  );
};

export default TxAction;
