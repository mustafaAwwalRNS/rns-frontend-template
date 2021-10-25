import type { LoginResponse } from "@queries";
export const authLoginResponse: LoginResponse = {
  token: "fake token",
  user: {
    username: "developer",
    profileImage: "http://test-something",
  },
};
