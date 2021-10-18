import { createContext } from "react";
import type { Socket } from "socket.io-client";

/**
 * Description:
 * Here we define the socket context;
 */
export const socketContext = createContext<Socket | undefined>({} as Socket);
