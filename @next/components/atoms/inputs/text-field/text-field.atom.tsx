import React from "react";
import * as S from "./text-field.styles";
import { TextFieldProps } from "./text-field.types";
export const TextField = ({
  inputRef,
  ...rest
}: TextFieldProps): JSX.Element => {
  return <S.TextField {...rest} ref={inputRef} />;
};
