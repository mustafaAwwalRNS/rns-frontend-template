import React from "react";
import { render, screen } from "test-utils";
import { Container } from "./container.atom";
const content = "container";

const setup = () => {
  const {
    container: { firstChild: container },
  } = render(<Container>{content}</Container>);
  return { container };
};

describe("<Container />", () => {
  it("should render", () => {
    const { container } = setup();
    expect(container).toBeInTheDocument();
  });
  it("should render children", () => {
    setup();
    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
