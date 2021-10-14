import styled from "styled-components";

export const GuestHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  ${({
    theme: {
      header: { height, zIndex },
      colors: { surface },
      shadow,
    },
  }) => ({
    height,
    zIndex,
    backgroundColor: surface,
    boxShadow: shadow(2),
  })}
`;

export const GuestHeaderNav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme: { containerWidth, spacing } }) => ({
    maxWidth: containerWidth,
    width: containerWidth,
    paddingLeft: spacing(2),
    paddingRight: spacing(2),
  })};
`;

export const GuestHeaderLinksList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
`;
export const GuestHeaderLinksListItem = styled.li`
  padding: 0;
  margin: 0;
  &:not(:last-child) {
    margin-right: ${({ theme: { spacing } }) => spacing(2)};
  }
`;
