import React from "react";
import { GuestHeader } from "@components/organisms";
import { GuestPanelProps } from "./guest-panel.types";
import * as constants from "./guest-panel.constants";
import * as S from "./guest-panel.styles";
export const GuestPanel = ({ children }: GuestPanelProps): JSX.Element => {
  return (
    <div>
      <GuestHeader {...constants.GuestPanelHeaderProps} />
      <S.GuestPanelContent>{children}</S.GuestPanelContent>
    </div>
  );
};
