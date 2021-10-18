import styled from "styled-components";

export const Notification = styled.div`
  height: 50px;
  width: 100%;

  &:not(:first-child) {
    ${({
      theme: {
        colors: { border },
      },
    }) => ({
      borderBottom: `1px solid ${border}`,
    })}
  }
  ${({
    theme: {
      colors: { main },
    },
  }) => ({ color: main })}
`;
