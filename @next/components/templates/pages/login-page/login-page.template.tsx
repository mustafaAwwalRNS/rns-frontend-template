import React from "react";
import * as S from "./login-page.styles";
import { Surface } from "@components/atoms";
import { LoginForm } from "@components/organisms";
import { LoginPageProps } from "./login-page.types";
export const LoginPage = ({ loginFormProps }: LoginPageProps): JSX.Element => {
  return (
    <S.LoginPageContainer>
      <Surface spacing={4}>
        <LoginForm {...loginFormProps} />
      </Surface>
    </S.LoginPageContainer>
  );
};
