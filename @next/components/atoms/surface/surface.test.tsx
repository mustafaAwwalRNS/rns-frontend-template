import React from "react";
import { render } from "test-utils";
import { Surface } from "./surface.template";
const setup = () => {
  const { container: surface } = render(<Surface>Surface content</Surface>);
  return { surface };
};

describe("<Surface />", () => {
  it("should render", () => {
    const { surface } = setup();
    expect(surface).toMatchSnapshot();
  });
});
