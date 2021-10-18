import { GridItemProps } from "@components/*";
import styled from "styled-components";
export const GridItem = styled.div<GridItemProps & { spacing: number }>`
  ${({ theme, spacing }) => ({
    padding: theme.spacing(spacing || 0),
  })}
`;
