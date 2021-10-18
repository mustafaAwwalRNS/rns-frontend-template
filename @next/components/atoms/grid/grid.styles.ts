import styled from "styled-components";
import { GridProps } from "./grid.types";
export const Grid = styled.div<GridProps>`
  display: flex;
  ${({
    theme,
    spacing,
    justifyContent,
    alignItems,
    flexDirection,
    flexWrap,
  }) => ({
    margin: `calc(-1 * ${theme.spacing(spacing)})`,
    justifyContent,
    alignItems,
    flexDirection,
    flexWrap,
  })}
`;
