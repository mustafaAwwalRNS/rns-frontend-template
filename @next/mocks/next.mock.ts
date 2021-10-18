import { setupWorker } from "msw";
import { setupServer } from "msw/node";
import { environment } from "@config";
import { authHandlers } from "./handlers";

/**
 * @file This file contains the implementation of mock api for next development
 * server. Set the NEXT_PUBLIC_ALLOW_API_MOCKING to false if you don't want mocking or remove it.
 */

export const nextMock = (): void => {
  if (environment.allowApiMocking && typeof window === "undefined") {
    setupServer(...authHandlers).listen();
  } else {
    setupWorker(...authHandlers).start();
  }
};
