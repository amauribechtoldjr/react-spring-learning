import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { loadSessions } from "./SessionPageReducer";

import { SessionPageContainer } from "./SessionPageStyles";
import { SessionGrid } from "./exports";

const SessionPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSessions(1));
  }, [dispatch]);

  return (
    <SessionPageContainer>
      <SessionGrid />
    </SessionPageContainer>
  );
};

export default SessionPage;
