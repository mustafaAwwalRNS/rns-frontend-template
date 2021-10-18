import React from "react";
import { render, screen } from "test-utils";
import { CircleImage } from "./circle-image.atom";
const setup = () => {
  render(<CircleImage src="http://someimage" alt="test" />);
};
describe("<CircleImage />", () => {
  it("should display a image", () => {
    setup();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
