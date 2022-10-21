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

    /* Font size */
    --font-large: 48px;
    --font-medium: 28px;
    --font-regular: 18px;
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
    font-size: var(--font-regular);
    font-weight: var(--weight-regular);
    margin: 4px 0;
  }
`;

export default GlobalStyle;
