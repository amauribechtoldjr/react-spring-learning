import React from "react";
import {
  SessionGridHeaderContainer,
  GridHeaderLabel,
  GridHeaderCol1,
  GridHeaderCol2,
  GridHeaderCol3
} from "./SessionGridHeaderStyles";

const SessionGridHeader = () => {
  return (
    <SessionGridHeaderContainer>
      <GridHeaderCol1>
        <GridHeaderLabel>Operador</GridHeaderLabel>
      </GridHeaderCol1>
      <GridHeaderCol2>
        <GridHeaderLabel>Abertura de sessão</GridHeaderLabel>
      </GridHeaderCol2>
      <GridHeaderCol3>
        <GridHeaderLabel>Fechamento de sessão</GridHeaderLabel>
      </GridHeaderCol3>
    </SessionGridHeaderContainer>
  );
};

export default SessionGridHeader;
