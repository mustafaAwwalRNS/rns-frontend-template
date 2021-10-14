import React from "react";
import * as S from "./divider.styles";
import { DividerProps } from "./divider.types";
/**
 * Divider
 *
 * Features:
 * - Renders a line which can be used to separate content.
 */
export const Divider = (props: DividerProps): JSX.Element => {
  return <S.Divider {...props} />;
};
