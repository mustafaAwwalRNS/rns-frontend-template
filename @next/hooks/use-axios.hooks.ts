import { useCallback, useEffect, useReducer } from "react";
import { AxiosError, AxiosResponse } from "axios";

/**
 * State of the useAxios hook
 */
interface UseAxiosState<T, J extends Array<unknown>> {
  /**
   * enum representing the current state the request:
   * - pending: the data has not been fetched.
   * - success: the data has been fetched successfully.
   * - error: error in data fetching.
   */
  status: "pending" | "success" | "error";
  /**
   * A loading variable which tells that the request is running.
   */
  loading: boolean;
  /**
   * Response.
   */
  data?: T;
  /**
   * Params required by the request.
   */
  params: J;
  /**
   * The error message from the request.
   */
  error: string;
  /**
   * The statusCode of the response.
   */
  statusCode?: number;
}

/**
 * The action to start the request
 */
interface FetchingAction<J extends Array<unknown>> {
  payload: { params: J };
  type: "fetching";
}

/**
 * Action which is called when error is encountered by the request
 */
interface ErrorAction {
  type: "error";
  payload: {
    error: string;
    statusCode?: number;
  };
}

/**
 * Action called when the request has been called successfully
 */
interface SuccessAction<T> {
  type: "success";
  payload: {
    data: T;
    statusCode?: number;
  };
}
/**
 * Refetch the request with the same params as before
 */
interface RefetchAction {
  type: "refetch";
}

/**
 * Actions accepted by the useAxios reducer.
 */
type UseAxiosActions<T, J extends Array<unknown>> =
  | FetchingAction<J>
  | ErrorAction
  | SuccessAction<T>
  | RefetchAction;

/**
 * Reducer for the useAxios state
 */
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
  /**
   * Function used to initiate the request
   */
  appFetch: (...params: J) => void,
  /**
   * All the variables to understand the status and response of the request
   */
  result: {
    /**
     * refetch the request with the previous provided params. use [] if hook has not been called before.
     */
    refetch: () => void;
  } & Omit<UseAxiosState<T, J>, "params">
];

/**
 * useAxios hook.
 *
 * Features:
 * - Fetches the given axios request on demand.
 * - Gives all the utilities required to understand the status and response of the request
 */
export const useAxios = <T, J extends Array<unknown>>(
  axiosRequest: (...params: J) => Promise<AxiosResponse<T>>
): UseAxiosReturnType<T, J> => {
  // initializing the reducer
  const [state, dispatch] = useReducer(reducer<T, J>(), {
    loading: false,
    error: "",
    status: "pending",
    params: [] as unknown as J,
  });

  /**
   * creating a callback to start fetching. You can easily use appFetch in hook dependencies without worry of re rendering.
   */
  const appFetch = useCallback((...params: J) => {
    dispatch({
      type: "fetching",
      payload: { params: params ?? ([] as unknown as J) },
    });
  }, []);
  /**
   * refetch the request with the previously provided props. uses [] if useAxios has not been called even once.
   */
  const refetch = useCallback(() => dispatch({ type: "refetch" }), []);

  /**
   * This effect runs the query.
   */
  useEffect(() => {
    if (state.loading) {
      // calling and handling of the request
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
