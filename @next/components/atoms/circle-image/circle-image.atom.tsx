import React from "react";
import * as S from "./circle-image.styles";
import { CircleImageProps } from "./circle-image.types";

/**
 * This image can be used to show for example a user profile image in a card
 * or on the header. Its a small circle image as the name suggests with image positioned in the center;
 * @param props - Props of the image component.
 * @returns
 */
export const CircleImage = (props: CircleImageProps): JSX.Element => (
  <S.CircleImage {...props} />
);
