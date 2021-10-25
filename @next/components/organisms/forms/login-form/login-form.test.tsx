import React from "react";
import { render, screen, waitFor } from "test-utils";
import { LoginForm } from "./login-form.organism";
import userEvent from "@testing-library/user-event";
import * as constants from "./login-form.constants";
import { startServer } from "@mocks";
import { LoginFormProps } from "./login-form.types";

const setup = ({
  loading = false,
  success = false,
  error = "",
}: Partial<LoginFormProps> = {}) => {
  const onSubmit = jest.fn();
  const utils = render(
    <LoginForm {...{ onSubmit, loading, success, error }} />
  );
  const emailField = screen.getByLabelText(/email/i) as HTMLInputElement;
  const passwordField = screen.getByLabelText(/password/i) as HTMLInputElement;
  const submitButton = screen.getByRole("button", { name: /Login/i });
  const form = screen.getByRole("form");
  return { emailField, passwordField, submitButton, onSubmit, form, ...utils };
};

describe("<LoginForm />", () => {
  startServer();

  it("should render all necessary components", async () => {
    const { emailField, passwordField, submitButton, form } = setup();
    expect(form).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("should accept valid values", async () => {
    const { emailField, passwordField, submitButton, onSubmit } = setup();
    const email = "rnssol@rns.com";
    const password = "12345678";
    userEvent.type(emailField, email);
    userEvent.type(passwordField, password);
    userEvent.click(submitButton);
    await waitFor(() => {
      expect(onSubmit.mock.calls[0][0]).toMatchObject({ email, password });
    });
    expect(onSubmit).toBeCalled();
  });
  it("should show loading", () => {
    setup({ loading: true });
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
  it("should disable submit button on loading", () => {
    const { submitButton } = setup({ loading: true });
    expect(submitButton).toBeDisabled();
  });
  it("should show success", () => {
    setup({ success: true });
    expect(screen.getByText(/success/i)).toBeInTheDocument();
  });
  it("should show wrong email pattern error message", async () => {
    const { emailField, submitButton } = setup();
    userEvent.type(emailField, "rnsSol");
    userEvent.click(submitButton);
    expect(await screen.findByText(constants.validationMessages.email.email));
  });

  it("should show message error messages on empty input", async () => {
    const { submitButton } = setup();
    userEvent.click(submitButton);
    expect(
      await screen.findByText(constants.validationMessages.email.required)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(constants.validationMessages.password.required)
    ).toBeInTheDocument();
  });

  it("should show minLength password error message", async () => {
    const { passwordField, submitButton } = setup();
    userEvent.type(passwordField, "12345");
    userEvent.click(submitButton);

    expect(
      await screen.findByText(constants.validationMessages.password.minLength)
    ).toBeInTheDocument();
  });
});
