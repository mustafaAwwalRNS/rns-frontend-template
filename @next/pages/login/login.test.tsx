import React from "react";
import { render, screen, waitForElementToBeRemoved, within } from "test-utils";
import { Login } from "./login.page";
import userEvent from "@testing-library/user-event";
import { startServer, authLoginResponse } from "@mocks";
const setup = () => {
  const utils = render(<Login />);
  const loginForm = screen.getByRole("form", { name: /login form/i });
  const emailField = within(loginForm).getByLabelText(/email/i);
  const passwordField = within(loginForm).getByLabelText(/password/i);
  const submitButton = within(loginForm).getByRole("button", {
    name: /login/i,
  });
  return { loginForm: { emailField, passwordField, submitButton }, ...utils };
};

describe("<Login />", () => {
  startServer();
  it("should perform the login flow correctly", async () => {
    const {
      loginForm: { emailField, passwordField, submitButton },
      store,
    } = setup();
    userEvent.type(emailField, "tester@rnssol.com");
    userEvent.type(passwordField, "123456789");
    userEvent.click(submitButton);
    const loading = await screen.findByText(/loading/i);
    await waitForElementToBeRemoved(loading);
    await screen.findByText(/success/i);
    expect(store.getState().auth).toMatchObject({
      loggedIn: true,
      user: authLoginResponse.user,
    });
  });
});
