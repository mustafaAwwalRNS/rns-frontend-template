import styled from "styled-components";
import { ButtonProps } from "./button.types";
export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  height: 48px;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  ${({
    theme: { spacing, colors, borderRadius, shadow },
    fullWidth,
    color,
  }) => ({
    paddingLeft: spacing(2),
    paddingRight: spacing(2),
    backgroundColor: colors[color || "main"],
    color: colors.contrast[color || "main"],
    borderRadius: borderRadius(1),
    ...(fullWidth && { width: "100%" }),
    boxShadow: shadow(1),
  })}
`;
