import React, { useState, useRef } from "react";

import { lg } from "../../utils/logUtils";

import {
  SearchInputStyled,
  SearchContainer,
  SelectContainer,
  FaIconSearch,
  FaIconSearchMinus,
  SearchInputContainer,
  FaArrowDownIcon
} from "./SearchInputStyles";

const SearchInput = ({ _onPressEnter, width = 200 }) => {
  const [text, setText] = useState("");
  const input = useRef();

  function searchInputSelectClick(event) {
    lg("Clicou no botão select do campo de pesquisa");
  }

  function _getInputFocus() {
    input.current.focus();
  }

  function clearSearch() {
    lg("Clicou no botão limpar pesquisa");
    setText("");
    _onPressEnter("");
  }

  return (
    <SearchContainer width={width}>
      <SearchInputContainer onClick={_getInputFocus}>
        <SearchInputStyled
          ref={input}
          type="text"
          value={text}
          placeholder="Pesquisar"
          onChange={event => {
            lg("Alterou input de pesquisa: " + event.target.value);
            setText(event.target.value);
          }}
          onKeyPress={event => {
            if (event.key === "Enter") {
              lg("Pressionou tecla Enter");
              _onPressEnter(text);
            }
          }}
        />
        {text === "" && <FaIconSearch size={16} />}
        {text !== "" && <FaIconSearchMinus size={16} onClick={clearSearch} />}
      </SearchInputContainer>
      <SelectContainer onClick={searchInputSelectClick}>
        <FaArrowDownIcon size={16} />
      </SelectContainer>
    </SearchContainer>
  );
};

export default SearchInput;
