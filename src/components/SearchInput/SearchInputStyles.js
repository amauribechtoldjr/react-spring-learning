import styled from "styled-components";

import { FaSearch, FaAngleDown, FaSearchMinus } from "react-icons/fa";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
  border-color: #1e5168;

  background-color: #ffffff;

  width: ${props => props.width}px;
  height: 30px;
`;

const SearchInputContainer = styled.div`
  flex: 1 1 0;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: text;
  }
`;

const SearchInputStyled = styled.input`
  flex: 1 1 0;
  width: 100%;
  margin-right: 4px;
  margin-left: 4px;

  background-color: transparent;
  border: 0px solid;

  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;

  ::-webkit-input-placeholder {
    text-align: center;
    font-style: italic;
  }

  :-moz-placeholder {
    text-align: center;
    font-style: italic;
  }

  ::-moz-placeholder {
    text-align: center;
    font-style: italic;
  }

  :-ms-input-placeholder {
    text-align: center;
    font-style: italic;
  }
`;

const FaIconSearch = styled(FaSearch)`
  flex: 0.2 1 0;
  opacity: 0.3;
  padding-right: 5px;
`;

const FaIconSearchMinus = styled(FaSearchMinus)`
  flex: 0.2 1 0;
  opacity: 0.3;
  padding-right: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const FaArrowDownIcon = styled(FaAngleDown)`
  flex: 1 1 0;
`;

const SelectContainer = styled.div`
  flex: 1 1 0;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffffff;
  background-color: #1e5168;
  max-width: 40px;
  height: 30px;

  :hover {
    cursor: pointer;
  }
`;

export {
  FaIconSearch,
  SearchContainer,
  SearchInputStyled,
  SelectContainer,
  FaArrowDownIcon,
  FaIconSearchMinus,
  SearchInputContainer
};
