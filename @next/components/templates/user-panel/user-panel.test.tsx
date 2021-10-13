import React from "react";
import { render, screen } from "test-utils";
import { UserPanel } from "./user-panel.template";
import mockRouter from "next-router-mock";
jest.mock("next/dist/client/router", () => require("next-router-mock"));

const content = "content";
const setup = () => {
  const utils = render(<UserPanel>content</UserPanel>);
  const navigationBar = screen.getByRole("navigation");
  const header = screen.getByRole("banner");
  return { navigationBar, header, ...utils };
};

describe("<BaseTemplate />", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });
  it("should render header", () => {
    const { header } = setup();
    expect(header).toBeInTheDocument();
  });
  it("should render navigation in sidebar", () => {
    const { navigationBar } = setup();
    expect(navigationBar).toBeInTheDocument();
  });
  it("should render content", () => {
    setup();
    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
