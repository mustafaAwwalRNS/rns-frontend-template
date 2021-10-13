import React from "react";
import * as S from "./sidebar-link.styles";
import { SideBarLinkProps } from "./sidebar-link.types";
import Link from "next/link";
export const SidebarLink = ({
  href,
  children,
  ...rest
}: SideBarLinkProps): JSX.Element => {
  return (
    <Link href={href} passHref>
      <S.SideBarLink {...rest}>{children}</S.SideBarLink>
    </Link>
  );
};
