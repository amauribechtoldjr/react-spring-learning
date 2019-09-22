import styled from "styled-components";

import { animated } from "react-spring";

const SessionGridContentContainer = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  background-color: #ffffff;
`;

const GridContentLabel = styled.span`
  color: #ffffff;
  font-size: 14px;
`;

const GridContentErrorContainer = styled(animated.div)`
  flex: 1 1 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridContentErrorSpan = styled.span`
  font-weight: 600;
  color: #fa5666;

  ${({ errorType }) => errorType === "warning" && `color: #1E5168`};
`;
export {
  SessionGridContentContainer,
  GridContentLabel,
  GridContentErrorContainer,
  GridContentErrorSpan
};
