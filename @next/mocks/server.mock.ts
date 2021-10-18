import { setupServer, SetupServerApi } from "msw/node";
import { authHandlers } from "./handlers";
const handlers = [...authHandlers];

/**
 * startServer
 *
 * Features:
 * - Starts the server with all the setup and teardown for the tests.
 */
export const startServer = (): SetupServerApi => {
  const server = setupServer(...handlers);
  beforeAll(() => server.listen());
  beforeEach(() => server.resetHandlers());
  afterAll(() => server.close());
  return server;
};
