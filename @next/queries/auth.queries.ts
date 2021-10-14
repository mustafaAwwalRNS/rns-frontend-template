import { useAxios, UseAxiosReturnType } from "@hooks";
import { backendAxios } from "@lib";
import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "@store";

/**
 * Props required to login.
 */
export interface LoginCredentials {
  email: string;
  password: string;
}

/**
 * Properties in login response
 */
export interface LoginResponse {
  token: string;
  user: {
    username: string;
    profileImage: string;
  };
}

/**
 * @class Has all the auth queries
 */
export class AuthQueries {
  static login = (
    credentials: LoginCredentials
  ): Promise<AxiosResponse<LoginResponse>> =>
    backendAxios.post("/login", credentials);
}

/**
 * useLogin hook
 *
 * Feature:
 * - It fetches the login query.
 * - On Success updates the store.
 */
export const useLogin = (): UseAxiosReturnType<
  LoginResponse,
  [credentials: LoginCredentials]
> => {
  const response = useAxios(AuthQueries.login);
  const [, { status, data }] = response;
  const dispatch = useDispatch();
  if (status === "success" && data) dispatch(authActions.login(data));
  return response;
};
