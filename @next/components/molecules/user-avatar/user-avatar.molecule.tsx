import React from "react";
import { CircleImage } from "@components/atoms";
import { UserAvatarProps } from "./user-avatar.types";
import * as S from "./user-avatar.styles";
/**
 * This is a component to represent a user avatar. It shows the profile image
 * and the user name.
 */

export const UserAvatar = ({
  username,
  imageAlt: alt,
  imageSrc: src,
}: UserAvatarProps): JSX.Element => {
  return (
    <S.UserAvatar>
      <S.Username>{username}</S.Username>
      <CircleImage {...{ src, alt }} />
    </S.UserAvatar>
  );
};
