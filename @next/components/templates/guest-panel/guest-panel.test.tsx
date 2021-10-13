import React from "react";
import { render, screen } from "test-utils";
import { GuestPanel } from "./guest-panel.template";
const text = "guest template children";

const setup = () => {
  const {
    container: { firstChild },
  } = render(<GuestPanel>{text}</GuestPanel>);
  const header = screen.getByRole("banner");
  return { header, guestPanel: firstChild };
};

describe("<GuestPanel />", () => {
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
});
