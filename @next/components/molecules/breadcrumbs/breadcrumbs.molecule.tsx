import React from "react";
import { BreadCrumbsProps } from "./breadcrumbs.types";
import { Link } from "@components/atoms";
import * as S from "./breadcrumbs.styles";

export const BreadCrumbs = ({ links }: BreadCrumbsProps): JSX.Element => {
  return (
    <S.BreadCrumbs>
      {links.map(({ text, href }, index) => (
        <S.Crumb key={index}>
          <Link {...{ href }}>{text}</Link>{" "}
          {links.length > 1 && <S.Chevron>&gt;</S.Chevron>}
        </S.Crumb>
      ))}
    </S.BreadCrumbs>
  );
};
