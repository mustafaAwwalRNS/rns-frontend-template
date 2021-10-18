import React from "react";
import { render } from "test-utils";
import { Home } from "./home.page";
const setup = () => {
  const { container } = render(<Home />);
  return container;
};
describe("<Home />", () => {
  it("should match snapshot", () => {
    const home = setup();
    expect(home).toMatchSnapshot();
  });
});
