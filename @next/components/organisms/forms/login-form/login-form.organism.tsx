import React from "react";
import { useForm, Controller } from "react-hook-form";
import { LabelledTextField } from "@components/molecules";
import { Grid, GridItem, Divider, Button, Typography } from "@components/atoms";
import * as constants from "./login-form.constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLogin, LoginCredentials } from "@queries";
export const LoginForm = (): JSX.Element => {
  const [login, { loading, status }] = useLogin();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(constants.loginCredentialValidationSchema),
  });
  return (
    <form onSubmit={handleSubmit(login)} aria-label="Login Form">
      <Grid flexDirection="column" alignItems="stretch" spacing={1}>
        <GridItem>
          <Typography variant="h1">Login</Typography>
        </GridItem>
        <GridItem>
          <Divider noSpacing />
        </GridItem>
        <GridItem>
          <Controller
            {...{ control }}
            name="email"
            render={({ field: { ref, onChange, onBlur, value, name } }) => (
              <LabelledTextField
                id="email"
                label="email"
                placeholder="Email"
                fullWidth
                {...{
                  onChange,
                  onBlur,
                  value,
                  name,
                }}
                inputRef={ref}
              />
            )}
          />
        </GridItem>
        {errors.email && <GridItem>{errors.email.message}</GridItem>}
        <GridItem>
          <Controller
            {...{ control }}
            name="password"
            render={({ field: { ref, onChange, onBlur, value, name } }) => (
              <LabelledTextField
                id="password"
                fullWidth
                label="password"
                placeholder="Password"
                type="password"
                {...{ onChange, onBlur, value, name }}
                inputRef={ref}
              />
            )}
          />
        </GridItem>
        {errors.password && <GridItem>{errors.password.message}</GridItem>}
        {status === "success" && <GridItem>success</GridItem>}
        <GridItem>
          <Divider noSpacing />
        </GridItem>
        {loading && <GridItem>Loading...</GridItem>}
        <GridItem>
          <Button type="submit" fullWidth disabled={loading}>
            Login
          </Button>
        </GridItem>
      </Grid>
    </form>
  );
};
