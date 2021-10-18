import React, { useEffect, useMemo } from "react";
import { socketContext } from "./socket.context";
import type { SocketProviderProps } from "./socket.types";
import { io } from "socket.io-client";
const { Provider } = socketContext;

export const SocketProvider = ({
  connectionString,
  connect,
  children,
}: SocketProviderProps): JSX.Element => {
  /**
   * Starting the socket and memoizing it so it doesn't recreates the connection on every
   * render.
   */
  const connection = useMemo(() => {
    /**
     * If the parent provides true then connect otherwise don't connect
     */
    if (connect) return io(connectionString);
  }, [connectionString, connect]);
  useEffect(() => {
    connection &&
      connection.on("connect", () => {
        console.log("connected");
      });
    return () => {
      /**
       * Disconnect on unmount to prevent memory leaks
       */
      connection && connection.disconnect();
    };
  }, [connect, connection]);
  /**
   * Wrap children with socket logic
   */
  return <Provider value={connection}>{children}</Provider>;
};
