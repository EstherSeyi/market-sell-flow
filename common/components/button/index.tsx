import React from "react";
import styled from "styled-components";
import BeatLoader from "react-spinners/BeatLoader";

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  color?: string;
  isLoading?: boolean;
}

export const disabledStyle = () => {
  return `&:disabled {
    background-color: rgba(119, 117, 126, 0.4);
    color: #ffffff;
    border-style: none;
    cursor: not-allowed;
  }`;
};

const StyledButton = styled.button<IProps>`
  padding: 0.75em 1.5em;
  text-transform: uppercase;
  border-radius: 4px;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({ color }) => (color ? color : "#49d273")};
`;

const Button = ({ children, color, isLoading, ...props }: IProps) => {
  return (
    <StyledButton color={color} {...props}>
      {isLoading ? <BeatLoader size={5} color="#ffffff" /> : children}
    </StyledButton>
  );
};

export default Button;
