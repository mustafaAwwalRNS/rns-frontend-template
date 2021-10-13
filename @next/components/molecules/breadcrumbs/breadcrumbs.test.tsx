import React from "react";
import { render, screen } from "test-utils";
import { BreadCrumbs } from "./breadcrumbs.molecule";
import { BreadCrumbsProps } from "./breadcrumbs.types";
const links: BreadCrumbsProps["links"] = [
  { href: "/user", text: "Dashboard" },
  { href: "/user/stats", text: "Statistics" },
];
const setup = (inputCrumbs?: BreadCrumbsProps["links"]) => {
  const utils = render(<BreadCrumbs links={inputCrumbs || links} />);
  const breadCrumbs = screen.getByRole("list");
  const crumbs = screen.getAllByRole("link");
  return { breadCrumbs, crumbs, ...utils };
};

describe("<BreadCrumbs />", () => {
  it("should render", () => {
    const { breadCrumbs } = setup();
    expect(breadCrumbs).toBeInTheDocument();
  });
  links.forEach(({ text }) => {
    it(`should render ${text} link`, () => {
      setup();
      expect(screen.getByRole("link", { name: text })).toBeInTheDocument();
    });
  });
  it("should not render > sign on single link", () => {
    setup([{ href: "/", text: "dashboard" }]);
    expect(screen.queryByText(">")).toBeNull();
  });
});
