import React from "react";
import { render, screen } from "test-utils";
import { GridItem } from "./grid-item.atom";
const content = "children";
const setup = () => {
  render(<GridItem>{content}</GridItem>);
  const gridItem = screen.getByRole("gridcell");
  return { gridItem };
};
describe("<GridItem />", () => {
  it("should render", () => {
    const { gridItem } = setup();
    expect(gridItem).toBeInTheDocument();
  });
});
