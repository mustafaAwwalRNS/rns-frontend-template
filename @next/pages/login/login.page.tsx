import React from "react";
import * as S from "./login.styles";
import { Surface } from "@components/atoms";
import { LoginForm } from "@components/organisms";
import { GuestPanel } from "@components/templates";
export const Login = (): JSX.Element => {
  return (
    <S.LoginContainer>
      <Surface spacing={4}>
        <LoginForm />
      </Surface>
    </S.LoginContainer>
  );
};

Login.getLayout = (page: React.ReactNode) => <GuestPanel>{page}</GuestPanel>;
