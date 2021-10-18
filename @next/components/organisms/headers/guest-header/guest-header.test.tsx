import React from "react";
import { render, screen } from "test-utils";
import { GuestHeaderProps } from "./guest-header.types";
import { GuestHeader } from "./guest-header.organism";

const props: GuestHeaderProps = {
  homeLink: {
    href: "/",
    routeName: "Home",
  },
  navLinks: [
    {
      href: "/login",
      routeName: "Login",
    },
    {
      href: "/sign-up",
      routeName: "Sign up",
    },
  ],
};
const setup = () => {
  render(<GuestHeader {...props} />);
  const header = screen.getByRole("banner");
  const homeLink = screen.getByRole("link", { name: props.homeLink.routeName });
  return { homeLink, header };
};

describe("<GuestHeader />", () => {
  it("should render a header", () => {
    const { header } = setup();
    expect(header).toBeInTheDocument();
  });
  it("should render home link", () => {
    const { homeLink } = setup();
    expect(homeLink).toBeInTheDocument();
  });
  props.navLinks.forEach(({ routeName }) => {
    it(`should render ${routeName} link`, () => {
      setup();
      screen.getByRole("link", { name: routeName });
    });
  });
});
