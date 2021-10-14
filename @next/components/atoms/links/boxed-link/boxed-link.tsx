import React from "react";
import * as S from "./boxed-link.styles";
import { BoxedLinkProps } from "./boxed-link.types";
import Link from "next/link";

/**
 * BoxLink
 *
 * Features:
 * - Renders a link.
 * - Style to look like a box. Can be used with menus like sidebar.
 */
export const BoxedLink = ({
  href,
  children,
  ...rest
}: BoxedLinkProps): JSX.Element => {
  return (
    <Link href={href} passHref>
      <S.BoxedLink {...rest}>{children}</S.BoxedLink>
    </Link>
  );
};
