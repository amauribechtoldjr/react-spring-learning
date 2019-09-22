import React from "react";

import { useSelector } from "react-redux";
import { useSpring } from "react-spring";

import {
  SessionGridContentContainer,
  GridContentErrorContainer,
  GridContentErrorSpan
} from "./SessionGridContentStyles";

import { SessionGridItem } from "../../exports";

import Loading from "../../../Loading/Loading";

const SessionGridContent = () => {
  const { loadingSessions, sessions, sessionsError } = useSelector(
    state => state.Session
  );
  const animation = useSpring({
    from: {
      color: "#ffffff",
      opacity: 0
    },
    to: {
      color: "#ffffff",
      opacity: 1
    },
    config: { duration: 1600 }
  });

  return (
    <SessionGridContentContainer>
      {loadingSessions ? (
        <Loading />
      ) : sessionsError !== "" ? (
        <GridContentErrorContainer style={animation}>
          <GridContentErrorSpan errorType={sessionsError.errorType}>
            {sessionsError.errorMessage}
          </GridContentErrorSpan>
        </GridContentErrorContainer>
      ) : (
        sessions.map((item, index) => (
          <SessionGridItem item={item} key={index} />
        ))
      )}
    </SessionGridContentContainer>
  );
};

export default SessionGridContent;
