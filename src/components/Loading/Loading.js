import React, { useEffect } from "react";
import { useToggle } from "react-powerhooks";

import { useSpring } from "react-spring";

import { LoadingContainer, RotatingIconWrapped } from "./LoadingStyles";

const Loading = () => {
  const initialValue = true;
  const [status, toggle] = useToggle(initialValue);
  const { angle } = useSpring({
    angle: 360,
    from: { angle: 0 },
    config: { duration: 498 },
    reset: true
  });

  useEffect(() => {
    const intervalId = setInterval(toggle, 500);
    return () => intervalId && clearInterval(intervalId);
  }, [status, toggle]);

  return (
    <LoadingContainer>
      <RotatingIconWrapped angle={angle} size={34} />
    </LoadingContainer>
  );
};

export default Loading;
