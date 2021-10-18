import React from "react";
import { render, screen } from "test-utils";
import { shouldBehaveLikeLink } from "@tests/behaviors";
import { BoxedLink } from "./boxed-link";
const setup = () => {
  const linkRoute = "/";
  const utils = render(<BoxedLink href={linkRoute}>Home</BoxedLink>);
  const link = screen.getByRole("link", { name: /Home/i });
  return { link, linkRoute, ...utils };
};

describe("<BoxedLink />", () => {
  shouldBehaveLikeLink(setup);
});
