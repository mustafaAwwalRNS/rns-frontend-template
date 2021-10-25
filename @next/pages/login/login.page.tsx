import React from "react";
import { GuestPanel, LoginPage } from "@components/templates";
import { useLogin } from "@queries";

/**
 * Login
 *
 * Features:
 * - Renders the login form with styling applied for better UX.
 */
export const Login = (): JSX.Element => {
  const [login, { status, loading, error }] = useLogin();
  return (
    <LoginPage
      loginFormProps={{
        loading,
        error,
        success: status === "success",
        onSubmit: login,
      }}
    />
  );
};

Login.getLayout = (page: React.ReactNode) => <GuestPanel>{page}</GuestPanel>;
