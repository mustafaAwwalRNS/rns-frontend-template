import React, { useEffect } from "react";
import { BaseTemplateTypes } from "./user-panel.types";
import { Sidebar, UserHeader } from "@components/organisms";
import * as S from "./user-panel.styles";
import * as constants from "./user.constants";
import { useSelectAuth } from "@store";
import { useRouter } from "next/router";
export const UserPanel = ({ children }: BaseTemplateTypes): JSX.Element => {
  const { loggedIn } = useSelectAuth();
  const router = useRouter();
  /**
   * The second condition router.pathname.includes('user') is for testing so the next
   * router mock does not goes in infinite loop because it does not unmount component
   * on route change.
   */
  useEffect(() => {
    if (!loggedIn && router.pathname.includes("user")) {
      router.push({ pathname: "/" });
    }
  }, [router, loggedIn]);
  return (
    <div>
      <UserHeader />
      <Sidebar links={constants.sideBarLinks} />
      <S.Content>{children}</S.Content>
    </div>
  );
};
