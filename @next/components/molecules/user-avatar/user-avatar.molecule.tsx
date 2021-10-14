import React from "react";
import { CircleImage } from "@components/atoms";
import { UserAvatarProps } from "./user-avatar.types";
import * as S from "./user-avatar.styles";
/**
 * UserAvatar
 *
 * Features
 * - Renders a component to display user info.
 */

export const UserAvatar = ({
  username,
  imageSrc: src,
}: UserAvatarProps): JSX.Element => {
  return (
    <S.UserAvatar>
      <S.Username>{username}</S.Username>
      <CircleImage {...{ src }} alt="user profile" />
    </S.UserAvatar>
  );
};
