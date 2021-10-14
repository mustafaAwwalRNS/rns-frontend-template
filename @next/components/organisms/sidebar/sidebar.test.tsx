import React from "react";
import { render, screen } from "test-utils";
import { Sidebar } from "./sidebar.organism";
import { BoxedLinkProps } from "@components/atoms";
const links: BoxedLinkProps[] = [
  { href: "/", children: "home" },
  { href: "/", children: "home" },
];
const setup = () => {
  const utils = render(<Sidebar {...{ links }} />);
  const sidebar = screen.getByRole("navigation");
  return { sidebar, utils };
};

describe("<Sidebar />", () => {
  it("should render", () => {
    const { sidebar } = setup();
    expect(sidebar).toBeInTheDocument();
  });
  it("should have correct number of links", () => {
    setup();
    expect(screen.getAllByRole("link")).toHaveLength(links.length);
  });
});
