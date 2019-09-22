import React from "react";

import {
  SessionGridHeader,
  SessionGridSearchExport,
  SessionGridContent
} from "../exports";

import { SessionGridContainer } from "./SessionGridStyles";

const SessionGrid = () => {
  return (
    <SessionGridContainer>
      <SessionGridSearchExport />
      <SessionGridHeader />
      <SessionGridContent />
    </SessionGridContainer>
  );
};

export default SessionGrid;
