import React from "react";
import styled from "styled-components";

import { animated } from "react-spring";
import { FaUndoAlt } from "react-icons/fa";

const LoadingContainer = styled.div`
  flex: 1 1 0;
  display: flex;

  justify-content: center;
  align-items: center;
`;

const IconLoading = styled(FaUndoAlt)`
  flex: 1 1 0;
  color: #1e5168;
`;

const WrappedIcon = ({ style, size, ...rest }) => (
  <animated.div
    style={{
      ...style,
      width: `${size}px`,
      height: `${size}px`
    }}
  >
    <IconLoading size={size} {...rest} />
  </animated.div>
);

const RotatingIconWrapped = styled(WrappedIcon).attrs(({ angle }) => ({
  style: {
    transform: angle.interpolate(a => `rotate(${a}deg)`)
  }
}))`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

export { LoadingContainer, IconLoading, RotatingIconWrapped };
