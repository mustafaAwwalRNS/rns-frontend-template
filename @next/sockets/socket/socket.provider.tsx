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
  const connection = useMemo(() => {
    if (connect) return io(connectionString);
  }, [connectionString, connect]);
  useEffect(() => {
    connection &&
      connection.on("connect", () => {
        console.log("connected");
      });
    return () => {
      connection && connection.disconnect();
    };
  }, [connect, connection]);
  return <Provider value={connection}>{children}</Provider>;
};
