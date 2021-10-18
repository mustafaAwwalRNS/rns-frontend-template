import React from "react";
import { Surface } from "@components/atoms";
import { UserPanel } from "@components/templates";
import { Notifications } from "@components/organisms";

/**
 * Dashboard
 *
 * Features:
 * - Renders user dashboard.
 */
export const Dashboard = (): JSX.Element => {
  return (
    <Surface>
      <Notifications />
    </Surface>
  );
};

Dashboard.getLayout = (page: React.ReactNode) => <UserPanel>{page}</UserPanel>;
