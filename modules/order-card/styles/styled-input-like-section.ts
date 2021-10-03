import styled from "styled-components";

const StyledInputLikeSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0.5em;
  align-items: center;

  .collateralization-ratio__value,
  .spot-change__value {
    color: #292535;
    font-size: 1rem;
    font-weight: 300;
    line-height: 22px;
  }
  .collateralization-ratio__percent,
  .spot-change__percent {
    font-size: 0.75rem;
    line-height: 16px;
    color: #77757e;
  }
  .spot-change__value-container {
    display: flex;
    align-items: center;
  }
  .spot-change__value {
    margin-right: 0.5em;
  }
`;

export default StyledInputLikeSection;
