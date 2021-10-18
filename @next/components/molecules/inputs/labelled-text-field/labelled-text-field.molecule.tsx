import React from "react";
import { Label, TextField } from "@components/atoms";
import { LabelledTextFieldProps } from "./labelled-text-field.types";

/**
 * LabelledTextField
 *
 * Features:
 * - All the functionality of the <TextField />.
 * - Has the label prop to renders label.
 * - Links label to input automatically for better accessibility.
 */
export const LabelledTextField = ({
  label,
  id,
  ...rest
}: LabelledTextFieldProps): JSX.Element => {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <TextField {...{ ...rest, id }} />
    </>
  );
};
