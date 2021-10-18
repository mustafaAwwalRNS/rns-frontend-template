import React from "react";
import { TypographyProps } from "./typography.types";
import * as S from "./typography.styles";

/**
 * Typography component. Uses colors from theme.
 */
export const Typography = ({
  variant,
  children,
  ...rest
}: TypographyProps): JSX.Element => {
  /**
   * Returning on the basis of the variant.
   */
  switch (variant) {
    case "h1":
      return <S.H1 {...rest}>{children}</S.H1>;
    case "h2":
      return <S.H2 {...rest}>{children}</S.H2>;
    case "h3":
      return <S.H3 {...rest}>{children}</S.H3>;
    case "h4":
      return <S.H4 {...rest}>{children}</S.H4>;
    case "h5":
      return <S.H5 {...rest}>{children}</S.H5>;
    case "h6":
      return <S.H6 {...rest}>{children}</S.H6>;
    case "secondary":
      return <S.Secondary {...rest}>{children}</S.Secondary>;
    default:
      return <S.Default {...rest}>{children}</S.Default>;
  }
};
