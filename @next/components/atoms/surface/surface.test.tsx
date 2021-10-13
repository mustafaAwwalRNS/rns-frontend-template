import React from "react";
import { render, screen } from "test-utils";
import { Surface } from "./surface.template";
const text = "surface";
const setup = () => {
  render(<Surface>{text}</Surface>);
};

describe("<Surface />", () => {
  it("should render", () => {
    setup();
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
