import {} from "react";
import * as S from "./label.styles";
import { LabelProps } from "./label.types";
export const Label = (props: LabelProps): JSX.Element => {
  return <S.Label {...props} />;
};
