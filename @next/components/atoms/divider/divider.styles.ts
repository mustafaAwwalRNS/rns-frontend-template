import styled from "styled-components";
import { DividerProps } from "./divider.types";
export const Divider = styled.hr<DividerProps>`
  ${({
    noSpacing,

    theme: {
      colors: { border },
    },
  }) => ({ borderTop: `1px solid ${border}`, ...(noSpacing && { margin: 0 }) })}
`;
