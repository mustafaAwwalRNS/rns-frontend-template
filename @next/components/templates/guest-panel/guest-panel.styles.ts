import styled from "styled-components";

export const GuestPanelContent = styled.div`
  ${({ theme: { header, spacing } }) => ({
    paddingTop: `calc(${header.height} + ${spacing(2)})`,
  })}
`;
