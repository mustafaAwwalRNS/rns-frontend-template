import styled from "styled-components";

export const Content = styled.div`
  ${({ theme: { sidebar, header, spacing } }) => ({
    marginLeft: `calc(
     ${sidebar.width} + ${spacing(2)}
    )`,
    marginRight: spacing(2),
    marginTop: `calc(
      ${header.height} + ${spacing(2)}
    )`,
  })}
`;
