import React from "react";
import * as S from "./grid-item.styles";
import { useSpacing } from "@next/hooks";
import { GridItemProps } from "./grid-item.types";
export const GridItem = ({ children, ...rest }: GridItemProps): JSX.Element => {
  const spacing = useSpacing();
  return (
    <S.GridItem role="gridcell" {...{ ...rest, spacing }}>
      {children}
    </S.GridItem>
  );
};
