import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  overscroll-behavior: contain none !important;
  scroll-behavior: smooth;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
* {
  margin: 0;
  padding: 0;
}

/* Custom Properties*/

:root {
  --fontfamily-primary: 'Avenir', sans-serif;
  --fontfamily-secondary: 'Roboto', sans-serif;

  --fontweight-reg: 300;
  --fontweight-medium: 500;
  --fontweight-bold: 800;

  --color-light: #ffffff;
  --color-grey-1: #dcdae9;
  --color-grey-2: #dee2e6;
  --color-grey-3: #77757e;
  --color-green-1: #49d273;
  --color-green-2: #b2f0c5;
  --color-blue: #4dadf3;
  --color-brown: #CD6116;
  --color-dark: #292535;
  --color-red: #ec7987;

  --fontsize-body: 1rem;
}

  body {
    margin: 0;
    padding: 0;
    font-family: var(--fontfamily-primary);
    font-size: var(--fontsize-body)
  }
  ul {
list-style-type: none;}

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
  background:none;
  &:focus{
    outline:none;
  }
}

/* button,
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
} */

.main{
  padding:.25em;
}
`;

export default GlobalStyle;
