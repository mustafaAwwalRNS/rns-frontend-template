import { socketContext } from "./socket.context";
import { useContext, useEffect, useState } from "react";

/**
 *
 * Define all socket related hooks here.
 */

/**
 * useLiveNotifications
 * Features:
 * - Adds event listener to socket
 * - Maintains a state for notifications
 * - Updates the notification on socket events
 * - Returns notifications
 */
export const useLiveNotifications = (): Array<string> => {
  /**
   * Getting socket through context
   */
  const socket = useContext(socketContext);
  /**
   * Setting up notifications array
   */
  const [notifications, setNotifications] = useState([] as Array<string>);

  useEffect(() => {
    const event = "notification";
    /**
     * Adds event listener if socket exists
     */

    socket &&
      socket.on(event, (notification: string) => {
        setNotifications((notifications) => [...notifications, notification]);
      });
    /**
     * Removes event listener on component unmount to prevent memory leaks
     */
    return () => {
      socket && socket.off(event);
    };
  }, [socket]);
  return notifications;
};
