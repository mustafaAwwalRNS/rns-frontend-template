import React from "react";
import * as S from "./divider.styles";
import { DividerProps } from "./divider.types";
export const Divider = (props: DividerProps): JSX.Element => {
  return <S.Divider {...props} />;
};
