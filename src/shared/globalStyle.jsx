import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* Global */
:root {
/* Color */
--color-bg: #DBDBDB;
--color-sth-pink: #D6BDBD;
--color-white: #ffffff;
--color-light-white: #eeeeee;
--color-dark-white: #bdbdbd;
--color-black: #000000;
--color-light-black: #181818;
--color-light-orange: #FFA959;

/* Font size */
--font-very-large: 60px;
--font-large: 48px;
--font-medium: 28px;
--font-regular: 22px;
--font-small: 16px;
--font-micro: 14px;

/* Font weight */
--weight-bold: 700;
--weight-semi-bold: 600;
--weight-regular: 400;

/* Animation Duration */
--animation-duration: 300ms;
}

/* Universal tags */
*, *::before, *::after {
box-sizing: border-box;
}

body {
margin:0;
padding:0;
background-color: var(--color-bg);
-webkit-user-select:none;
-moz-user-select:none;
-ms-user-select:none;
user-select:none;
}

section {
width: 80vw;
max-width: 1320px;
display: flex;
flex-flow: column nowrap;
align-items: center;
}

ul {
list-style: none;
padding-left: 0;
}

button {
background-color: transparent;
cursor: pointer;
border: none;
outline: none;
}
button[name='category'] {
  background-color: var(--color-black);
  color: var(--color-white);
}
button[name='categoryActive'] {
  background-color: var(--color-light-orange);
  color: var(--color-light-black);
}

hr {
margin: 0;
padding: 0;
}

/* Typography */
h1 {
font-size: var(--font-large);
font-weight: var(--weight-bold);
margin: 16px 0px;
}

h2 {
font-size: var(--font-medium);
font-weight: var(--weight-semi-bold);
margin: 8px 0;
}

h3 {
font-size: var(--font-regular);
font-weight: var(--weight-regular);
margin: 8px 0;
}

p {
font-size: var(--font-small);
font-weight: var(--weight-regular);
margin: 4px 0;
}

.span {
//transition: 1000ms ease;
}
`;

export default GlobalStyle;
