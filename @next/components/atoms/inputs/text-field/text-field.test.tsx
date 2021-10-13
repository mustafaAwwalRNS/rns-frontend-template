import React from "react";
import { render, screen } from "test-utils";
import { TextField } from "./text-field.atom";
import { shouldBehaveLikeTextInput } from "@tests/behaviors";
const setup = () => {
  const utils = render(<TextField />);
  const textInput = screen.getByRole("textbox") as HTMLInputElement;
  return { textInput, ...utils };
};

describe("<TextField />", () => {
  it("should render text field", () => {
    const { textInput } = setup();
    expect(textInput).toBeInTheDocument();
  });
  shouldBehaveLikeTextInput(setup);
});
