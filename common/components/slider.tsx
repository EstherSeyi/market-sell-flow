import { useState } from "react";
import styled, { css } from "styled-components";

const sliderThumbStyles = (props: any) => `
  width: 25px;
  height: 25px;
  background: ${props.color};
  cursor: pointer;
  outline: 5px solid #333;
  opacity: ${props.opacity};
  -webkit-transition: .2s;
  transition: opacity .2s;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  color: #888;
  margin-top: 2rem;
  margin-bottom: 2rem;
  .slider {
    flex: 6;
    -webkit-appearance: none;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    ${({ min, max, value }: { min: number; max: number; value: number }) => css`
      background: linear-gradient(
        to right,
        #49d273 0%,
        #49d273 ${((value - min) / (max - min)) * 100}%,
        #dee2e6 ${((value - min) / (max - min)) * 100}%,
        #dee2e6 100%
      );
    `};
    outline: none;
    transition: background 450ms ease-in;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 5px;
      height: 20px;
      background: #49d273;
      cursor: pointer;
      /* -webkit-transition: 0.2s; */
    }
    &::-moz-range-thumb {
      width: 5px;
      height: 25px;
      background: #49d273;
      cursor: pointer;
      /* -webkit-transition: 0.2s; */
    }
  }
  .slider {
    width: 100%;
  }
`;

const CollateralSlider = () => {
  const [state, setState] = useState(0);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setState(parseFloat(event.currentTarget.value));
  };

  console.log(state);

  return (
    <StyledLabel htmlFor="collateral-range" value={state} min={0} max={100}>
      <input
        type="range"
        id="collateral-range"
        className="slider"
        min={0}
        max={100}
        onChange={handleChange}
        value={state}
      />
    </StyledLabel>
  );
};

export default CollateralSlider;
