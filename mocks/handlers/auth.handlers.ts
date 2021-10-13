import { rest } from "msw";

export const authHandlers = [
  rest.post("http://mockapi.com/login", (req, res, ctx) => {
    return res(ctx.json({ token: "fake token", username: "developer" }));
  }),
];
