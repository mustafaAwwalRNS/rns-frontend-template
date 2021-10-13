import React from "react";

export type TextFieldProps = {
  type?: "number" | "text" | "email" | "password";
  fullWidth?: boolean;
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
