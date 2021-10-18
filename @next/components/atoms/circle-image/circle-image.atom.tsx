import React from "react";
import * as S from "./circle-image.styles";
import { CircleImageProps } from "./circle-image.types";

/**
 * CircleImage
 *
 * Feature:
 * - Renders a image contained in a circle.
 */
export const CircleImage = (props: CircleImageProps): JSX.Element => (
  <S.CircleImage {...props} />
);
