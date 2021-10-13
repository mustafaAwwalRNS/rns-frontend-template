import React from "react";
import { GridProps } from "./grid.types";
import * as S from "./grid.styles";
import { spacingContext } from "@contexts";
const { Provider } = spacingContext;
export const Grid = ({
  children,
  spacing = 1,
  ...rest
}: GridProps): JSX.Element => (
  <Provider value={spacing}>
    <S.Grid role="grid" {...{ spacing }} {...rest}>
      {children}
    </S.Grid>
  </Provider>
);
