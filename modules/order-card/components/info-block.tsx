import React from "react";
import styled, { css } from "styled-components";

import Info from "../../../public/svgs/info.svg";

const StyledInfoBlock = styled.div<{ secondary?: boolean }>`
  margin: 1.25em 0;
  .info-container {
    display: flex;
    align-items: flex-end;
    margin-bottom: 0.5em;
  }
  .info-title {
    font-weight: 500;
    font-size: 0.75rem;
    text-transform: uppercase;
    color: #292535;
    margin-right: 0.5em;
    line-height: 16px;
    letter-spacing: 0.1em;
  }
  .info-content {
    border: 1px solid #dcdae9;
    padding: 0.5em 0.25em;
    border-radius: 4px;
    line-height: 22px;
    color: #77757e;
    font-weight: 300;

    ${({ secondary }) => {
      return (
        secondary &&
        css`
          background-color: rgba(220, 218, 233, 0.3);
          border-style: none;
        `
      );
    }}
  }
`;

const InfoBlock = ({
  children,
  title,
  secondary,
}: {
  children: React.ReactNode;
  title: string;
  secondary?: boolean;
}) => {
  return (
    <StyledInfoBlock secondary={secondary}>
      <div className="info-container">
        <h3 className="info-title">{title}</h3>
        {!secondary && <Info className="info-icon" />}
      </div>
      <div className="info-content">{children}</div>
    </StyledInfoBlock>
  );
};

export default InfoBlock;
