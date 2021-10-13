import React from "react";
import { SurfaceProps } from "./surface.types";
import * as S from "./surface.styles";
export const Surface = ({ children, ...rest }: SurfaceProps): JSX.Element => {
  return <S.Surface {...rest}>{children}</S.Surface>;
};
