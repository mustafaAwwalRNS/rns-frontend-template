import styled from "styled-components";

export const Label = styled.label`
  text-transform: uppercase;
  font-weight: bold;
  display: inline-block;
  ${({
    theme: {
      colors: {
        text: { main },
      },
      spacing,
    },
  }) => ({
    color: main,
    marginBottom: spacing(1),
  })}
`;
