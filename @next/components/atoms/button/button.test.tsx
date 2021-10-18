import React from "react";
import { render, screen } from "test-utils";
import { Button } from "./button.atom";
import userEvent from "@testing-library/user-event";

const setup = () => {
  const onClick = jest.fn();
  render(<Button {...{ onClick }}>button</Button>);
  const button = screen.getByRole("button", { name: /button/i });
  return { button, onClick };
};

describe("<Button />", () => {
  it("should render", () => {
    const { button } = setup();
    expect(button).toBeInTheDocument();
  });

  it("should be clickable", () => {
    const { button, onClick } = setup();
    userEvent.click(button);
    expect(onClick).toBeCalled();
  });
});
