import React from "react";
import { ContainerProps } from "./container.types";
import * as S from "./container.styles";
export const Container = ({
  children,
  ...rest
}: ContainerProps): JSX.Element => {
  return <S.Container {...rest}>{children}</S.Container>;
};
