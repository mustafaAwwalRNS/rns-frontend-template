import React from "react";

export interface SocketProviderProps {
  // The string with which you want to connect with the socket.
  connectionString: string;
  children: React.ReactNode;
  connect: boolean;
}
