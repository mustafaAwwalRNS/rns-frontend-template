import React from "react";
import { GuestHeaderProps } from "./guest-header.types";
import { Link } from "@components/atoms";
import * as S from "./guest-header.styles";
export const GuestHeader = ({
  homeLink,
  navLinks,
}: GuestHeaderProps): JSX.Element => {
  return (
    <S.GuestHeader role="banner">
      <S.GuestHeaderNav>
        <Link href={homeLink.href}>{homeLink.routeName}</Link>
        <S.GuestHeaderLinksList>
          {navLinks.map(({ routeName, href }, index) => (
            <S.GuestHeaderLinksListItem key={index}>
              <Link {...{ href }}>{routeName}</Link>
            </S.GuestHeaderLinksListItem>
          ))}
        </S.GuestHeaderLinksList>
      </S.GuestHeaderNav>
    </S.GuestHeader>
  );
};
