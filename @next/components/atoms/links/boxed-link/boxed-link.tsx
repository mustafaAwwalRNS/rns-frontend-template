import React from "react";
import * as S from "./boxed-link.styles";
import { BoxedLinkProps } from "./boxed-link.types";
import Link from "next/link";
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
