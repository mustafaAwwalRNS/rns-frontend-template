import styled from "styled-components";
export const SideBarLink = styled.a`
  width: 100%;
  display: block;
  text-decoration: none;
  font-weight: bold;

  ${({
    theme: {
      spacing,
      colors: { main, surface },
    },
  }) => ({ padding: spacing(2), color: main, backgroundColor: surface })}
`;
