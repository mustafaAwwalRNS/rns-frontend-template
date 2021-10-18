import styled from "styled-components";
export const BreadCrumbs = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const Crumb = styled.li`
  &:not(:last-child) {
    ${({ theme: { spacing } }) => ({ marginRight: spacing(2) })}
  }
`;

export const Chevron = styled.span`
  font-weight: bolder;
`;
