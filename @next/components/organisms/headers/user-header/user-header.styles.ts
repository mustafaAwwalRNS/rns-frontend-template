import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  ${({
    theme: {
      header: { height, zIndex },
      spacing,
      colors: { surface },
      shadow,
    },
  }) => ({
    boxShadow: shadow(2),
    height,
    zIndex,
    paddingLeft: spacing(2),
    paddingRight: spacing(2),
    backgroundColor: surface,
  })};
`;

export const HeaderLogo = styled.div`
  ${({ theme: { spacing } }) => ({
    marginRight: spacing(6),
  })}
`;
