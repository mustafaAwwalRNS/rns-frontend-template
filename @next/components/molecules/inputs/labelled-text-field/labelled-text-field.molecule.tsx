import React from "react";
import { Label, TextField } from "@components/atoms";
import { LabelledTextFieldProps } from "./labelled-text-field.types";
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
