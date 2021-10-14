import {} from "react";
import * as S from "./label.styles";
import { LabelProps } from "./label.types";

/**
 * Label
 *
 * Feature:
 * - Provides native label functionality
 *
 * Best Practice:
 * - Always use label with input. it is good for accessibility.
 *
 * Note:
 * Use <LabelledTextInput />. This input has the label functionality build it.
 */
export const Label = (props: LabelProps): JSX.Element => {
  return <S.Label {...props} />;
};
