import React from "react";
import * as S from "./link.styles";
import { LinkProps } from "./link.types";
import NextLink from "next/link";
/**
 * Link
 *
 * Feature:
 * - Renders a link styled according to the theme.
 */
export const Link = ({ href, children, ...rest }: LinkProps): JSX.Element => (
  <NextLink href={href} passHref>
    <S.Link {...rest}>{children}</S.Link>
  </NextLink>
);
