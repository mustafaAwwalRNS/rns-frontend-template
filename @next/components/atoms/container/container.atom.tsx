import React from "react";
import { ContainerProps } from "./container.types";
import * as S from "./container.styles";

/**
 * Container
 *
 * Features:
 * - Limits the content flow to width set by the theme.
 * - Has spacing utility to add padding.
 * - Can take fullWidth of the container according to the props.
 */
export const Container = ({
  children,
  ...rest
}: ContainerProps): JSX.Element => {
  return <S.Container {...rest}>{children}</S.Container>;
};
