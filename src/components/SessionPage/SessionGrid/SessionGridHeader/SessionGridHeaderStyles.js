import styled from "styled-components";

const SessionGridHeaderContainer = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: #1e5168;
  color: #ffffff;
  padding: 5px;

  font-size: 13px;

  min-height: 50px;
  max-height: 50px;
`;

const GridHeaderLabel = styled.span`
  color: #ffffff;
  font-size: 13px;
  font-weight: 400;
`;

const GridHeaderCol1 = styled.div`
  flex: 0.34 1 0;
  display: flex;
  justify-content: center;
`;

const GridHeaderCol2 = styled.div`
  flex: 0.16 1 0;
  display: flex;
  justify-content: center;
`;

const GridHeaderCol3 = styled.div`
  flex: 0.5 1 0;
  display: flex;
  justify-content: center;
`;

export {
  GridHeaderLabel,
  SessionGridHeaderContainer,
  GridHeaderCol1,
  GridHeaderCol2,
  GridHeaderCol3
};
