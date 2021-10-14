import React from "react";
import { Grid, GridItem, Button } from "@components/atoms";
import { UserAvatar } from "@components/molecules";
import * as S from "./user-header.styles";
import { useSelectAuth, authActions } from "@store";
import { useDispatch } from "react-redux";

export const UserHeader = (): JSX.Element => {
  const {
    user: { username, profileImage },
  } = useSelectAuth();
  const dispatch = useDispatch();
  return (
    <S.Header role="banner">
      <S.HeaderLogo>logo</S.HeaderLogo>
      <Grid spacing={2}>
        <GridItem>
          <Button onClick={() => dispatch(authActions.logout())}>Logout</Button>
        </GridItem>
        <GridItem>
          <UserAvatar username={username} imageSrc={profileImage} />
        </GridItem>
      </Grid>
    </S.Header>
  );
};
