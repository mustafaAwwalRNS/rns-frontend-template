import React from "react";
import { BaseTemplateTypes } from "./user-panel.types";
import { Sidebar, UserHeader } from "@components/organisms";
import * as S from "./user-panel.styles";
import * as constants from "./user.constants";
export const UserPanel = ({ children }: BaseTemplateTypes): JSX.Element => {
  return (
    <div>
      <UserHeader />
      <Sidebar links={constants.sideBarLinks} />
      <S.Content>{children}</S.Content>
    </div>
  );
};
