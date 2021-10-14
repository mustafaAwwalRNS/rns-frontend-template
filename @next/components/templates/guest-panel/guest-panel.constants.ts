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
  ],
};
