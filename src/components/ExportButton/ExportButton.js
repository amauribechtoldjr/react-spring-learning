import React from "react";

import {
  ExportButtonContainer,
  ButtonSpan,
  IconArrowDown
} from "./ExportButtonStyles";

import { exportJSONToCSV } from "../../utils/fileUtils";

const ExportButton = ({ width = 100, csvData, fileName }) => {
  return (
    <ExportButtonContainer
      onClick={event => exportJSONToCSV(csvData, fileName)}
      width={width}
    >
      <ButtonSpan>Exportar</ButtonSpan>
      <IconArrowDown size={16} />
    </ExportButtonContainer>
  );
};

export default ExportButton;
