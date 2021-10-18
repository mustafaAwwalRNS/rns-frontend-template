import styled from "styled-components";
import { TextFieldProps } from "./text-field.types";
export const TextField = styled.input<TextFieldProps>`
  outline: none;
  height: 48px;
  ${({
    theme: {
      colors: { surface, text, border },
      borderRadius,
      spacing,
    },
    fullWidth,
  }) => ({
    backgroundColor: surface,
    color: text.main,
    border: `1px solid ${border}`,
    borderRadius: borderRadius(1),
    padding: spacing(1),
    ...(fullWidth && { width: "100%" }),
  })}
`;
