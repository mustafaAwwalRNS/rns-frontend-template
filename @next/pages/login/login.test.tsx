import React from "react";
import { render } from "test-utils";
import { Login } from "./login.page";
const setup = () => {
  const { container } = render(<Login />);
  return container;
};

describe("<Login />", () => {
  it("should match snapshot", () => {
    const login = setup();
    expect(login).toMatchSnapshot();
  });
});
