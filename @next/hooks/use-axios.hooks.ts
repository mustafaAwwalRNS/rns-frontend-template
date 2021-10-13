import { useCallback, useEffect, useReducer } from "react";
import { AxiosError, AxiosResponse } from "axios";
interface UseAxiosState<T, J extends Array<unknown>> {
  status: "pending" | "success" | "error";
  loading: boolean;
  data?: T;
  params: J;
  error: string;
  statusCode?: number;
}

interface FetchingAction<J extends Array<unknown>> {
  payload: { params: J };
  type: "fetching";
}
interface ErrorAction {
  type: "error";
  payload: {
    error: string;
    statusCode?: number;
  };
}
interface SuccessAction<T> {
  type: "success";
  payload: {
    data: T;
    statusCode?: number;
  };
}
interface RefetchAction {
  type: "refetch";
}
type UseAxiosActions<T, J extends Array<unknown>> =
  | FetchingAction<J>
  | ErrorAction
  | SuccessAction<T>
  | RefetchAction;
const reducer =
  <T, J extends Array<unknown>>() =>
  (
    state: UseAxiosState<T, J>,
    action: UseAxiosActions<T, J>
  ): UseAxiosState<T, J> => {
    switch (action.type) {
      case "fetching": {
        return {
          ...state,
          loading: true,
          status: "pending",
          error: "",
          statusCode: undefined,
          ...action.payload,
        };
      }
      case "refetch": {
        return { ...state, loading: true, status: "pending" };
      }
      case "error": {
        return { ...state, loading: false, status: "error", ...action.payload };
      }
      case "success": {
        return {
          ...state,
          loading: false,
          status: "success",
          error: "",
          data: action.payload.data,
          statusCode: action.payload.statusCode,
        };
      }
      default: {
        return state;
      }
    }
  };

export type UseAxiosReturnType<T, J extends Array<unknown>> = [
  appFetch: (...params: J) => void,
  result: {
    data?: T;
    loading: UseAxiosState<T, J>["loading"];
    status: UseAxiosState<T, J>["status"];
    statusCode: UseAxiosState<T, J>["statusCode"];
    error: string;

    refetch: () => void;
  }
];

export const useAxios = <T, J extends Array<unknown>>(
  axiosRequest: (...params: J) => Promise<AxiosResponse<T>>
): UseAxiosReturnType<T, J> => {
  const [state, dispatch] = useReducer(reducer<T, J>(), {
    loading: false,
    error: "",
    status: "pending",
    params: [] as unknown as J,
  });
  const appFetch = useCallback((...params: J) => {
    dispatch({
      type: "fetching",
      payload: { params: params ?? ([] as unknown as J) },
    });
  }, []);
  const refetch = useCallback(() => dispatch({ type: "refetch" }), []);
  useEffect(() => {
    if (state.loading) {
      axiosRequest(...state.params)
        .then((response) => {
          dispatch({
            type: "success",
            payload: {
              data: response.data,
              statusCode: response.status,
            },
          });
        })
        .catch((error: AxiosError) => {
          dispatch({
            type: "error",
            payload: {
              statusCode: error.response?.status,
              error: error.message,
            },
          });
        });
    }
  }, [state.loading, state.params, axiosRequest]);

  return [
    appFetch,
    {
      refetch,
      loading: state.loading,
      statusCode: state.statusCode,
      status: state.status,
      data: state.data,
      error: state.error,
    },
  ];
};
