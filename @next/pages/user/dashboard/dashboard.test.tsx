import React from "react";
import { render } from "test-utils";
import { Dashboard } from "./dashboard.page";

const setup = () => {
  const {
    container: { firstChild: dashboard },
  } = render(<Dashboard />);
  return { dashboard };
};

describe("<Dashboard />", () => {
  it("should match snapshot", () => {
    const { dashboard } = setup();
    expect(dashboard).toMatchSnapshot();
  });
});
