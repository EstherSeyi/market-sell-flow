import styled from "styled-components";

const LimitPrice = () => {
  return (
    <StyledLimitPrice>
      <span className="limit-price__value">100</span>
      <span className="limit-price__currency">USDC</span>
    </StyledLimitPrice>
  );
};

export default LimitPrice;

const StyledLimitPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5em;

  .limit-price__value {
    color: #292535;
    line-height: 22px;
  }
  .limit-price__currency {
    color: #77757e;
    font-weight: 300;
    font-size: 0.75rem;
    line-height: 14px;
    font-family: Roboto;
  }
`;
