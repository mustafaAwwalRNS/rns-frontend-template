import React from "react";
import { render } from "test-utils";
import { LoginPage } from "./login-page.template";
const setup = () => {
  const {
    container: { firstChild: loginPage },
  } = render(
    <LoginPage
      loginFormProps={{
        onSubmit: jest.fn(),
        success: false,
        loading: false,
        error: "",
      }}
    />
  );
  return { loginPage };
};

describe("<LoginPage />", () => {
  it("should match snapshot", () => {
    const { loginPage } = setup();
    expect(loginPage).toMatchSnapshot();
  });
});
