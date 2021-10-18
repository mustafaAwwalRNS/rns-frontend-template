import React from "react";

export type TextFieldProps = {
  /**
   * Supported input types
   */
  type?: "number" | "text" | "email" | "password";

  /**
   * Take full width of the container.
   */
  fullWidth?: boolean;
  /**
   * Use inputRef when needed to pass ref
   */
  inputRef?:
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined;
} & Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  | "onClick"
  | "onChange"
  | "onBlur"
  | "value"
  | "name"
  | "className"
  | "id"
  | "placeholder"
>;
