import React from "react";
import * as S from "./grid-item.styles";
import { useSpacing } from "@next/hooks";
import { GridItemProps } from "./grid-item.types";

/**
 * GridItem
 *
 * Features:
 * - Can be used anywhere where parent is using flexbox.
 * - When used with <Grid /> as parent it can add spacing in itself according
 * to the spacing value given to the <Grid />.
 * - It has media query support.
 */
export const GridItem = ({ children, ...rest }: GridItemProps): JSX.Element => {
  const spacing = useSpacing();
  return (
    <S.GridItem role="gridcell" {...{ ...rest, spacing }}>
      {children}
    </S.GridItem>
  );
};
