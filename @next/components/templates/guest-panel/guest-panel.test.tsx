import React from "react";
import { render, screen, waitFor } from "test-utils";
import singletonRouter from "next/router";
import { GuestPanel } from "./guest-panel.template";
import mockRouter from "next-router-mock";
import { authActions } from "@store";
jest.mock("next/dist/client/router", () => require("next-router-mock"));
const text = "guest template children";

const setup = () => {
  const {
    container: { firstChild },
    store,
    ...rest
  } = render(<GuestPanel>{text}</GuestPanel>);
  const header = screen.getByRole("banner");
  return { header, guestPanel: firstChild, store, ...rest };
};

describe("<GuestPanel />", () => {
  beforeEach(() => mockRouter.setCurrentUrl("/"));
  it("should render", () => {
    const { guestPanel } = setup();
    expect(guestPanel).toBeInTheDocument();
  });
  it("should render a header element", () => {
    const { header } = setup();
    expect(header).toBeInTheDocument();
  });
  it("should render its children", () => {
    setup();
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it("should redirect to user dashboard if the user is logged in", async () => {
    const { store } = setup();
    expect(singletonRouter).toMatchObject({ asPath: "/" });
    store.dispatch(
      authActions.login({ token: "fake token", user: { username: "tester" } })
    );
    await waitFor(() =>
      expect(singletonRouter).toMatchObject({ asPath: "/user" })
    );
  });
});
