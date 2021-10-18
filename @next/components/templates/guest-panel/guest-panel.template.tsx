import React, { useEffect } from "react";
import { GuestHeader } from "@components/organisms";
import { GuestPanelProps } from "./guest-panel.types";
import * as constants from "./guest-panel.constants";
import { useSelectAuth } from "@store";
import { useRouter } from "next/router";
import * as S from "./guest-panel.styles";

/**
 * Guest Panel
 *
 *
 * Features:
 * - Renders components which are common between all guest pages.
 *
 */
export const GuestPanel = ({ children }: GuestPanelProps): JSX.Element => {
  const { loggedIn } = useSelectAuth();
  const router = useRouter();
  useEffect(() => {
    /**
     * The second condition of !router.pathname.includes("user") is a condition for tests to pass.
     * Because the next-router-mock doesn't unmounts the component on route change which puts the component
     * in infinite loop and causes the tests to fail. Let it be here. It does not cause any issues.
     */
    if (loggedIn && !router.pathname.includes("user"))
      router.push({ pathname: "/user" });
  }, [loggedIn, router]);
  return (
    <div>
      <GuestHeader {...constants.GuestPanelHeaderProps} />
      <S.GuestPanelContent>{children}</S.GuestPanelContent>
    </div>
  );
};
