import React from "react";
import { ContainerProps } from "./container.types";
import * as S from "./container.styles";
export const Container = ({
  children,
  spacing,
  fluid,
  ...rest
}: ContainerProps): JSX.Element => {
  return (
    <S.Container {...{ spacing, fluid }} {...rest}>
      {children}
    </S.Container>
  );
};
