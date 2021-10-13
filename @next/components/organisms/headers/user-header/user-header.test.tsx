import React from "react";
import { render, screen } from "test-utils";

import { UserHeader } from "./user-header.organism";

const setup = () => {
  const utils = render(<UserHeader />);
  const header = screen.getByRole("banner");
  return { header, ...utils };
};

describe("<UserHeader />", () => {
  it("should render", () => {
    const { header } = setup();
    expect(header).toBeInTheDocument();
  });
});
