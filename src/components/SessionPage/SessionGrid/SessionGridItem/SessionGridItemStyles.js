import styled from "styled-components";

import { animated } from "react-spring";

const GridItemLabel = styled.span`
  color: #1e5168;
  font-size: 13px;
  font-weight: 400;
`;

const SessionGridContentItemContainer = styled(animated.div)`
  flex: 1 1 0;
  display: flex;

  height: 80px;
  align-items: center;
  justify-content: center;

  padding: 25px;

  &:hover {
    background-color: #fffaf7;

    & span {
      font-weight: 400;
      font-size: 14px;

      &.closed {
        font-weight: bold;
      }
    }
  }
`;

export { GridItemLabel, SessionGridContentItemContainer };
