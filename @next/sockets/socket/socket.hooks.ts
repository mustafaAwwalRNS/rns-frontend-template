import { socketContext } from "./socket.context";
import { useContext, useEffect, useState } from "react";

export const useLiveNotifications = (): Array<string> => {
  const socket = useContext(socketContext);
  const [notifications, setNotifications] = useState([] as Array<string>);
  useEffect(() => {
    const event = "notification";
    socket &&
      socket.on(event, (notification: string) => {
        setNotifications((notifications) => [...notifications, notification]);
      });
    return () => {
      socket && socket.off(event);
    };
  }, [socket]);
  return notifications;
};
