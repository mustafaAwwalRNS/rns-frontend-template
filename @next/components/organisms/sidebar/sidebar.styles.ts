import styled from "styled-components";

export const Sidebar = styled.div`
  position: fixed;
  left: 0;
  ${({
    theme: {
      sidebar: { width, zIndex },
      header,
      colors: { surface },
      shadow,
    },
  }) => ({
    width,
    top: header.height,
    backgroundColor: surface,
    zIndex,
    boxShadow: shadow(2),
    height: `calc(100vh - ${header.height})`,
  })}
`;
export const SideBarLinkList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const SideBarLinkListItem = styled.li`
  ${({
    theme: {
      colors: { border },
    },
  }) => ({ borderBottom: `1px solid ${border}` })}
`;
