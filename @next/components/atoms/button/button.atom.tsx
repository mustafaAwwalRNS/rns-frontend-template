import React from "react";
import { ButtonProps } from "./button.types";
import * as S from "./button.styles";

/**
 * Button
 *
 * Feature:
 * - Renders a button component.
 * - Uses theme to style itself.
 */
export const Button = (props: ButtonProps): JSX.Element => {
  return <S.Button {...props} />;
};
