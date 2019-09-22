import React from "react";

import SearchInput from "../../../SearchInput/SearchInput";
import ExportButton from "../../../ExportButton/ExportButton";

import { SearchExportContainer } from "./SessionGridSearchExportStyles";

import { useSelector, useDispatch } from "react-redux";

import { searchSessions } from "../../SessionPageReducer";

const SessionGridSearchExport = ({ onSearch }) => {
  const { sessions } = useSelector(state => state.Session);
  const dispatch = useDispatch();

  function doSearch(text) {
    dispatch(searchSessions(1, text));
  }

  return (
    <SearchExportContainer>
      <ExportButton csvData={sessions} fileName="Jump-teste" />
      <SearchInput width={280} _onPressEnter={text => doSearch(text)} />
    </SearchExportContainer>
  );
};

export default SessionGridSearchExport;
