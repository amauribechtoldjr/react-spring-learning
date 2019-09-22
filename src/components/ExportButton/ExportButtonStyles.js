import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";

const ExportButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  border-radius: 4px;

  background-color: #52bc76;
  color: #ffffff;

  max-height: 30px;
  min-width: ${props => props.width}px;

  :hover {
    cursor: pointer;
  }
`;

const ButtonSpan = styled.span`
  font-size: 12px;
`;

const IconArrowDown = styled(FaAngleDown)``;

export { ExportButtonContainer, ButtonSpan, IconArrowDown };
