import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
    padding: 0;
}
  body {
    margin: 0;
    padding: 0;
    font-family: Avenir;
  }
  .flex-justify-between{
    display:flex;
    justify-content:space-between;
  }
`;

export default GlobalStyle;
