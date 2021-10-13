import { GuestHeaderProps } from "@components/organisms";

export const GuestPanelHeaderProps: GuestHeaderProps = {
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
      routeName: "sign-up",
    },
  ],
};
