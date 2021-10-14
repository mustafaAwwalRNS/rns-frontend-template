import React from "react";
import { render, screen, waitFor } from "test-utils";
import mockRouter from "next-router-mock";
import singletonRouter from "next/router";
import { UserPanel } from "./user-panel.template";
import userEvent from "@testing-library/user-event";
jest.mock("next/dist/client/router", () => require("next-router-mock"));

const content = "content";
const setup = () => {
  const utils = render(<UserPanel>content</UserPanel>, { withUser: true });
  const navigationBar = screen.getByRole("navigation");
  const header = screen.getByRole("banner");
  const logoutButton = screen.getByRole("button", { name: /logout/i });
  return { navigationBar, header, logoutButton, ...utils };
};

describe("<BaseTemplate />", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/user");
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
  it("should logout when the user clicks logout button", async () => {
    const { logoutButton } = setup();
    expect(singletonRouter.pathname).toBe("/user");
    userEvent.click(logoutButton);
    await waitFor(() => {
      expect(singletonRouter.pathname).toBe("/");
    });
  });
});
