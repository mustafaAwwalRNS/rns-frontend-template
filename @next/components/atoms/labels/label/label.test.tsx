import React from "react";
import { render, screen } from "test-utils";
import { Label } from "./label.atom";
const text = "email";
const setup = () => {
  render(<Label>{text}</Label>);
  const label = screen.getByText(text);
  return { label };
};

describe("<Label />", () => {
  it("should render a label", () => {
    const { label } = setup();
    expect(label).toBeInTheDocument();
  });
});
