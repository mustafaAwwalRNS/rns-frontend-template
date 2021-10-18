import React from "react";
import { render, screen, act } from "test-utils";
import { Notifications } from "./notifications.organism";
import { server, cleanUp } from "../../../../__mocks__/socket.io-client";

jest.mock("socket.io-client");

const setup = () => {
  render(<Notifications />, { connectWithSocket: true });
  const heading = screen.getByRole("heading");
  return { heading };
};

describe("<Notifications />", () => {
  afterEach(cleanUp);
  it("should render", () => {
    const { heading } = setup();
    expect(heading).toBeInTheDocument();
  });
  it("should show notification", async () => {
    setup();
    act(() => server.emit("notification", "hello"));
    expect(await screen.findByText("hello")).toBeInTheDocument();
  });
});
