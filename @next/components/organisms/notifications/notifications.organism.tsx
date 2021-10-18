import React from "react";
import { Typography, Notification } from "@components/atoms";
import { Divider } from "@next/components/atoms/divider/divider.styles";
import { Surface } from "@next/components/atoms/surface/surface.styles";
import { useLiveNotifications } from "@sockets";
export const Notifications = (): JSX.Element => {
  const notifications = useLiveNotifications();
  return (
    <Surface spacing={2}>
      <Typography variant="h2">Notifications</Typography>
      <Divider />
      {notifications.map((notification, index) => (
        <Notification {...{ notification }} key={index} />
      ))}
    </Surface>
  );
};
