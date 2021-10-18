import { rest } from "msw";
import { environment } from "@config";

/**
 * authHandlers
 *
 * Features:
 * - Contains all the auth api handlers.
 */
export const authHandlers = [
  rest.post(environment.apiKey + "/login", (req, res, ctx) => {
    return res(
      ctx.json({
        token: "fake token",
        user: { username: "developer", profileImage: "http://test-something" },
      })
    );
  }),
];
