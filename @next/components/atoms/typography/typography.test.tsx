import React from "react";
import { render, screen } from "test-utils";
import { TypographyProps } from "./typography.types";
import { Typography } from "./typography.atom";

const text = "typography";
const headingVariants: TypographyProps["variant"][] = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
];
const setup = (variant?: TypographyProps["variant"]) => {
  render(<Typography {...{ variant }}>{text}</Typography>);
};

describe("<Typography />", () => {
  for (const headingVariant of headingVariants) {
    it(`should render ${headingVariant} when passed ${headingVariant} as variant prop`, () => {
      setup(headingVariant);
      expect(screen.getByRole("heading", { name: text })).toBeInTheDocument();
    });
  }
  it("should render content when passed secondary as variant prop", () => {
    setup("secondary");
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it("should render text when no variant props are passed", () => {
    setup();
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
