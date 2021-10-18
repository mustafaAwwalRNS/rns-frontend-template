import styled from "styled-components";
import { ContainerProps } from "./container.types";
export const Container = styled.div<ContainerProps>`
  ${({ theme, spacing, fluid }) => ({
    ...(!fluid && {
      maxWidth: theme.containerWidth,
      display: "block",
      margin: "0 auto",
    }),
    padding: theme.spacing(spacing || 0),
  })}
`;
