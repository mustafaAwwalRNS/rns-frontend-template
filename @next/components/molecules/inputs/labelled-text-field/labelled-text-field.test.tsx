import React from "react";
import { render, screen } from "test-utils";
import { LabelledTextField } from "./labelled-text-field.molecule";
import { LabelledTextFieldProps } from "./labelled-text-field.types";
import { shouldBehaveLikeTextInput } from "@tests/behaviors";
const props: LabelledTextFieldProps = {
  id: "email",
  label: "email",
};

const setup = () => {
  const utils = render(<LabelledTextField {...props} />);
  const textInput = screen.getByLabelText(props.label) as HTMLInputElement;
  return { textInput, ...utils };
};

describe("<LabelledTextField />", () => {
  it("should render with proper label text", () => {
    const { textInput } = setup();
    expect(textInput).toBeInTheDocument();
  });
  shouldBehaveLikeTextInput(setup);
});
