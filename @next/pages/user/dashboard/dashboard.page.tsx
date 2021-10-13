import React from "react";
import { Surface } from "@components/atoms";
import { UserPanel } from "@components/templates";
export const Dashboard = (): JSX.Element => {
  return <Surface>dashboard</Surface>;
};

Dashboard.getLayout = (page: React.ReactNode) => <UserPanel>{page}</UserPanel>;
