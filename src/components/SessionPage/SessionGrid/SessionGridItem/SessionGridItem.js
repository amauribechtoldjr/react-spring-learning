import React from "react";

import {
  GridItemLabel,
  SessionGridContentItemContainer
} from "./SessionGridItemStyles";

import {
  GridHeaderCol1,
  GridHeaderCol2,
  GridHeaderCol3
} from "../SessionGridHeader/SessionGridHeaderStyles";

import { useSpring } from "react-spring";

const SessionGridItem = ({ item }) => {
  const animation = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: { duration: 560 }
  });

  return (
    <SessionGridContentItemContainer style={animation}>
      <GridHeaderCol1>
        <GridItemLabel>{item.userName}</GridItemLabel>
      </GridHeaderCol1>
      <GridHeaderCol2>
        <GridItemLabel>{item.startDateTime}</GridItemLabel>
      </GridHeaderCol2>
      <GridHeaderCol3>
        {/* podemos usar um className="closed" quando for para aparecer   botão de encerrar sessão */}
        <GridItemLabel>{item.endDateTime}</GridItemLabel>
      </GridHeaderCol3>
    </SessionGridContentItemContainer>
  );
};

export default SessionGridItem;
