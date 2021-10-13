import styled from "styled-components";
export const Link = styled.a`
  text-decoration: none;
  text-transform: capitalize;
  ${({
    theme: {
      colors: {
        text: { main },
      },
    },
  }) => ({
    color: main,
  })}
`;
