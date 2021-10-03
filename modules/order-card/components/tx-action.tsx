import styled from "styled-components";

import Bullet from "../../../public/svgs/bullet.svg";
import Info from "../../../public/svgs/info.svg";

const Styled = styled.div`
  margin: 1em 0 1.5em 0;
  .txaction__icon {
    width: 16px;
    height: 16px;
    color: #292535;
    margin-right: 0.25em;
  }
  .txaction__icon--info {
    color: rgba(119, 117, 126, 0.5);
    margin-right: 0;
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
    flex-basis: 80%;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 14px;
    color: #292535;
  }
  .txaction__item-text--current {
    text-decoration: underline;
  }
  .txaction__item-text--disabled {
    font-weight: 300;
    color: #77757e;
  }
  .txaction__item-text {
    font-family: Roboto;
  }
`;

const TxAction = () => {
  return (
    <Styled>
      <h3 className="tx-action__title">Tx Action</h3>
      <ul>
        <TxActionItem text="1. Enable WETH Wrapper" />
        <TxActionItem text="2. Approve collateral to Opyn Contracts" />
        <TxActionItem text="3. Permit oToken to wrapper contracts" />
        <TxActionItem text="4. Permit, deposit, mint & trade" />
      </ul>
    </Styled>
  );
};

const TxActionItem = ({ text }: { text: string }) => {
  return (
    <li className="txaction__item ">
      <Bullet className="txaction__icon" />
      <span className="txaction__item-text">{text}</span>
      <Info className="txaction__icon txaction__icon--info" />
    </li>
  );
};

export default TxAction;
