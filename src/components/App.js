import React from "react";
import GlobalStyle from "./globalStyle";

import { SessionPage } from "./SessionPage/exports";

import { AppStyled } from "./AppStyled";

function App() {
  return (
    <AppStyled>
      <GlobalStyle />
      <SessionPage />
    </AppStyled>
  );
}

export default App;
