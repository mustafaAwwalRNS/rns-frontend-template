import React from "react";
import { ButtonProps } from "./button.types";
import * as S from "./button.styles";
export const Button = (props: ButtonProps): JSX.Element => {
  return <S.Button {...props} />;
};
