import React from "react";
import { GridProps } from "./grid.types";
import * as S from "./grid.styles";
import { spacingContext } from "@contexts";
const { Provider } = spacingContext;

/**
 * Grid
 *
 * Features:
 * - Renders a fluid grid.
 * - Has all the utilities of flex in the props.
 * - Provides spacing context for grid items.
 *
 * Note:
 * Use grid item inside if you want to use the spacing prop. Else it won't have an effect
 */
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
