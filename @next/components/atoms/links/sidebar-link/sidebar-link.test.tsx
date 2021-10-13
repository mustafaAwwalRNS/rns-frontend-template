import React from "react";
import { render, screen } from "test-utils";
import { shouldBehaveLikeLink } from "@tests/behaviors";
import { SidebarLink } from "./sidebar-link.atom";
const setup = () => {
  const linkRoute = "/";
  const utils = render(<SidebarLink href={linkRoute}>Home</SidebarLink>);
  const link = screen.getByRole("link", { name: /Home/i });
  return { link, linkRoute, ...utils };
};

describe("<SidebarLink />", () => {
  shouldBehaveLikeLink(setup);
});
