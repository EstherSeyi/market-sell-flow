import React from "react";
import styled from "styled-components";

import Info from "../../../public/svgs/info.svg";

const StyledInfoBlock = styled.div`
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
  }
  .info-content {
    border: 1px solid #dcdae9;
    padding: 0.5em 0.25em;
    border-radius: 4px;
  }
`;

const InfoBlock = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <StyledInfoBlock>
      <div className="info-container">
        <h3 className="info-title">{title}</h3>
        <Info className="info-icon" />
      </div>
      <div className="info-content">{children}</div>
    </StyledInfoBlock>
  );
};

export default InfoBlock;
