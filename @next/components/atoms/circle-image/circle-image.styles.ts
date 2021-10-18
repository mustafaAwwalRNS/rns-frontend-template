import styled from "styled-components";

export const CircleImage = styled.img`
  width: 50px;
  height: 50px;
  overflow: 50%;
  min-width: 50px;
  min-height: 50px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  ${({ theme: { shadow } }) => ({
    boxShadow: shadow(2),
  })}
`;
