import React from "react";
import { render, screen } from "test-utils";
import { Grid } from "./grid.atom";
const text = "grid content";
const setup = () => {
  render(<Grid>{text}</Grid>);
  const grid = screen.getByRole("grid");
  return { grid };
};

describe("<Grid />", () => {
  it("should render a grid", () => {
    const { grid } = setup();
    expect(grid).toBeInTheDocument();
  });
  it("should render children", () => {
    setup();
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
