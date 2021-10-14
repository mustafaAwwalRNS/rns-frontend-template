import React from "react";
import { render, screen } from "test-utils";

import { UserHeader } from "./user-header.organism";
const setup = () => {
  const utils = render(<UserHeader />, { withUser: true });
  const header = screen.getByRole("banner");
  return { header, ...utils };
};

describe("<UserHeader />", () => {
  it("should have accessible role", () => {
    const { header } = setup();
    expect(header).toBeInTheDocument();
  });
  it("should match snapshot", () => {
    const { header } = setup();
    expect(header).toMatchSnapshot();
  });
});
