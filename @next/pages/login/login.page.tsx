import React from "react";
import * as S from "./login.styles";
import { Surface } from "@components/atoms";
import { LoginForm } from "@components/organisms";
import { GuestPanel } from "@components/templates";

/**
 * Login
 *
 * Features:
 * - Renders the login form with styling applied for better UX.
 */
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
