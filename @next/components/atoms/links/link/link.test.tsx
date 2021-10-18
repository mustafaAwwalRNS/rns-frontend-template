import React from "react";
import { shouldBehaveLikeLink } from "@tests/behaviors";
import { render, screen } from "test-utils";
import { Link } from "./link.atom";
const setup = () => {
  const linkRoute = "/";
  const utils = render(<Link href={linkRoute}>Home</Link>);
  const link = screen.getByRole("link", { name: /Home/ });
  return { linkRoute, link, ...utils };
};

describe("<Link />", () => {
  shouldBehaveLikeLink(setup);
});
