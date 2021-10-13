import React from "react";
import { render, screen } from "test-utils";
import { Divider } from "./divider.atom";
const setup = () => {
  render(<Divider />);
  const divider = screen.getByRole("separator");
  return { divider };
};
describe("<Divider />", () => {
  it("should render a divider", () => {
    const { divider } = setup();
    expect(divider).toBeInTheDocument();
  });
});
