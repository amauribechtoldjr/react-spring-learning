import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    margin: 0;
    max-width: 100%;
    position:absolute;
    /* TODO - alterar width e height para min- */
    width: 100%;
    height: 100%;
    font-family: Arial, Helvetica, sans-serif
  }

  #root {
    flex: 1 1 0;
    display: flex;
    min-height: 100%;
    background-color: #FFFAF7;
  }
`;
