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
  ul {
list-style-type: none;}

  .flex-justify-between{
    display:flex;
    justify-content:space-between;
  }

button,
input{
  font-family: inherit; 
  font-size: 100%; 
  line-height: 1.15; 
  margin: 0;
}

button,
input { 
  overflow: visible;
}

button
 { 
  text-transform: none;
  border-style: none;
  cursor: pointer;
  &:focus{
    outline:none;
  }
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
`;

export default GlobalStyle;
