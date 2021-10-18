import { DefaultTheme } from "styled-components";
export type ButtonProps = {
  /**
   * Make the button take full width of the container.
   */
  fullWidth?: boolean;

  /**
   * Changes the background color of the button
   */
  color?: keyof Pick<
    DefaultTheme["colors"],
    "main" | "secondary" | "success" | "warn" | "danger"
  >;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
