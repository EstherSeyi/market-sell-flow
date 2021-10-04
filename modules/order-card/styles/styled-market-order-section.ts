import styled from "styled-components";

export const StyledMarketOrderSection = styled.section`
  border: 1px solid rgba(220, 218, 233, 0.2);
  max-width: 400px;
  margin: 0 auto;
  margin-top: 1em;
  padding-top: 1em;

  .info-icon {
    color: rgba(119, 117, 126, 0.5);
    width: 14px;
    height: 14px;
  }
  .page-content {
    height: calc(100vh - 37px - 5rem);
    overflow-y: scroll;
  }

  .market-limit-tabs {
    display: flex;
  }
  .market-tab,
  .limit-tab {
    flex-basis: 50%;
    text-align: center;
    padding: 1em 0;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    line-height: 16px;
    font-weight: 300;
    cursor: pointer;

    background: rgba(220, 218, 233, 0.2);
    border-bottom: 1px solid rgba(41, 37, 53, 0.2);
    &:focus,
    &:active {
      background: transparent;
      border-style: none;
    }
    &:hover {
      font-weight: 500;
    }
  }

  .market-tab {
    border-right: 1px solid rgba(41, 37, 53, 0.2);
  }
  .limit-tab {
    border-left: 1px solid rgba(41, 37, 53, 0.2);
  }

  .tab--focused {
    background: transparent;
    border-style: none;
  }
`;
