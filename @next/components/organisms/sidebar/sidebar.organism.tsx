import React from "react";
import * as S from "./sidebar.styles";
import { SidebarProps } from "./sidebar.types";
import { BoxedLink } from "@components/atoms";

/**
 * Sidebar
 *
 * Features:
 * - Renders sidebar menu with links provided by the parent component.
 */
export const Sidebar = ({ links }: SidebarProps): JSX.Element => {
  return (
    <S.Sidebar>
      <nav>
        <S.SideBarLinkList>
          {links.map((props, index) => (
            <S.SideBarLinkListItem key={index}>
              <BoxedLink {...props} />
            </S.SideBarLinkListItem>
          ))}
        </S.SideBarLinkList>
      </nav>
    </S.Sidebar>
  );
};
