import React from "react";
import * as S from "./button.styles";

interface Props {
  children: React.ReactNode;
}

export const Button = ({ children }: Props) => <S.Button>{children}</S.Button>;
