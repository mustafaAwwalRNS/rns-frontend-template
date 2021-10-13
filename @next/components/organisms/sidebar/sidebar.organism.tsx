import React from "react";
import * as S from "./sidebar.styles";
import { SidebarProps } from "./sidebar.types";
import { SidebarLink } from "@components/atoms";

export const Sidebar = ({ links }: SidebarProps): JSX.Element => {
  return (
    <S.Sidebar>
      <nav>
        <S.SideBarLinkList>
          {links.map((props, index) => (
            <S.SideBarLinkListItem key={index}>
              <SidebarLink {...props} />
            </S.SideBarLinkListItem>
          ))}
        </S.SideBarLinkList>
      </nav>
    </S.Sidebar>
  );
};
