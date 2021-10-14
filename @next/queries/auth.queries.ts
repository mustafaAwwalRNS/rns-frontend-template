import { useAxios, UseAxiosReturnType } from "@hooks";
import { backendAxios } from "@lib";
import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "@store";
export interface LoginCredentials {
  email: string;
  password: string;
}
export interface LoginResponse {
  token: string;
  user: {
    username: string;
    profileImage: string;
  };
}

export class AuthQueries {
  static login = (
    credentials: LoginCredentials
  ): Promise<AxiosResponse<LoginResponse>> =>
    backendAxios.post("/login", credentials);
}

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
