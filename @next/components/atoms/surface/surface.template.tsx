import React from "react";
import { SurfaceProps } from "./surface.types";
import * as S from "./surface.styles";

/**
 * Surface
 *
 * Features:
 * - Provides a surface to host content.
 * - Has spacing utility built in.
 *
 * Note:
 * - Try to use this most of the time to host content it is styled in a way
 * which helps content stand out from the background.
 */
export const Surface = ({ children, ...rest }: SurfaceProps): JSX.Element => {
  return <S.Surface {...rest}>{children}</S.Surface>;
};
