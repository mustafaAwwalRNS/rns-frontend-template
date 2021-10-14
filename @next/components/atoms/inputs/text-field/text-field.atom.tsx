import React from "react";
import * as S from "./text-field.styles";
import { TextFieldProps } from "./text-field.types";

/**
 * TextField
 *
 * Feature:
 * - Renders a input field for the user.
 * - Styled according to the theme.
 *
 * Note:
 * - It does not support all input types see props for further description.
 * - Use labelled text instead of this. It uses this input in the background
 * but it has label already included in it.
 */
export const TextField = ({
  inputRef,
  ...rest
}: TextFieldProps): JSX.Element => {
  return <S.TextField {...rest} ref={inputRef} />;
};
