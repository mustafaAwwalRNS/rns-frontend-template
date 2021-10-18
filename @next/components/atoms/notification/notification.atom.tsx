import React from "react";
import * as S from "./notification.styles";
import { NotificationProps } from "./notification.types";
export const Notification = ({
  notification,
}: NotificationProps): JSX.Element => {
  return <S.Notification>{notification}</S.Notification>;
};
