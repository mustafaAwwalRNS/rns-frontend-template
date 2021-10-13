import { DefaultTheme } from "styled-components";
export type ButtonProps = {
  fullWidth?: boolean;
  color?: keyof Pick<
    DefaultTheme["colors"],
    "main" | "secondary" | "success" | "warn" | "danger"
  >;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
