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
    color: var(--color-dark);
    line-height: 22px;
  }
  .limit-price__currency {
    color: var(--color-grey-3);
    font-weight: var(--fontweight-reg);
    font-size: 0.75rem;
    line-height: 14px;
    font-family: var(--fontfamily-secondary);
  }
`;
