import styled from "styled-components";
import { Typography } from "@components/atoms";
export const UserAvatar = styled.div`
  display: inline-flex;
  align-items: center;
  height: 50px;
  min-width: 80px;
  ${({
    theme: {
      borderRadius,
      colors: { border },
      spacing,
    },
  }) => ({
    border: `1px solid ${border}`,
    borderRadius: borderRadius(4),
    paddingLeft: spacing(1),
  })}
`;

export const Username = styled(Typography)`
  flex-grow: 1;
  text-align: center;
  ${({ theme: { spacing } }) => ({
    marginRight: spacing(1),
  })}
`;
