import { useState } from "react";
import styled, { css } from "styled-components";

const StyledLabel = styled.label<{
  min: number;
  max: number;
  value: number;
  colVal?: number;
}>`
  position: relative;
  display: flex;
  align-items: center;
  color: var(--color-grey-1);
  margin: 0.75em 0 2.25em 0;

  .slider {
    flex: 6;
    -webkit-appearance: none;
    width: 100%;
    height: 6px;
    z-index: 2;
    border-radius: 5px;
    ${({ min, max, value }) => css`
      background: linear-gradient(
        to right,
        var(--color-green-1) 0%,
        var(--color-green-1) ${((value - min) / (max - min)) * 100}%,
        var(--color-grey-2) ${((value - min) / (max - min)) * 100}%,
        var(--color-grey-2) 100%
      );
    `};
    outline: none;
    transition: background 450ms ease-in;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 5px;
      height: 15px;
      background: var(--color-green-1);
      cursor: pointer;
    }
    &::-moz-range-thumb {
      width: 5px;
      height: 25px;
      background: var(--color-green-1);
      cursor: pointer;
    }
  }
  .slider {
    width: 100%;
  }
  .collateral-range__percent {
    position: absolute;
    font-size: 0.5rem;
    top: 16px;
    color: var(--color-grey-3);
    opacity: 0.7;
  }
  .collateral-range__percent--zero-percent {
    left: 0px;
  }
  .collateral-range__percent--twentyfive-percent {
    left: 25%;
  }
  .collateral-range__percent--fifty-percent {
    left: 50%;
  }
  .collateral-range__percent--seventyfive-percent {
    left: 75%;
  }
  .collateral-range__percent--hundred-percent {
    left: 95%;
  }
  .collateral-range__colVal {
    ${({ colVal }) =>
      colVal &&
      css`
        padding: 0.5em 0.125em;
        background: var(--color-grey-3);
        position: absolute;
        z-index: 2;
        left: ${colVal}%;
      `};
  }
`;

const CollateralSlider = ({ colVal = 0 }) => {
  const [state, setState] = useState(75);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setState(parseFloat(event.currentTarget.value));
  };

  return (
    <StyledLabel
      htmlFor="collateral-range"
      value={state}
      min={0}
      max={100}
      colVal={colVal}
    >
      <input
        type="range"
        id="collateral-range"
        className="slider"
        min={0}
        max={100}
        onChange={handleChange}
        value={state}
      />
      <span className="collateral-range__colVal"></span>
      <span className="collateral-range__percent collateral-range__percent--zero-percent">
        0%
      </span>
      <span className="collateral-range__percent collateral-range__percent--twentyfive-percent">
        25%
      </span>
      <span className="collateral-range__percent collateral-range__percent--fifty-percent">
        50%
      </span>
      <span className="collateral-range__percent collateral-range__percent--seventyfive-percent">
        75%
      </span>
      <span className="collateral-range__percent collateral-range__percent--hundred-percent">
        100%
      </span>
    </StyledLabel>
  );
};

export default CollateralSlider;
