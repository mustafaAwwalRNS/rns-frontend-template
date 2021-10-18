import styled from "styled-components";
import { SurfaceProps } from "./surface.types";
export const Surface = styled.div<SurfaceProps>`
  ${({
    theme: {
      colors: { surface },
      spacing,
      borderRadius,
      shadow,
    },
    spacing: propSpacing,
  }) => ({
    backgroundColor: surface,
    borderRadius: borderRadius(1),
    padding: spacing(propSpacing || 1),
    boxShadow: shadow(2),
  })}
`;
