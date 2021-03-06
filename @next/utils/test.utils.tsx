// test-utils.ts
import {
  render,
  queries,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@styles";
import { ReactElement } from "react";
import { Provider } from "react-redux";
import { createStore, authActions } from "@store";
import { SocketProvider } from "@sockets";

/**
 * customRender
 *
 * Features:
 * - extends the render function to add common providers.
 *
 */
const customRender = (
  ui: ReactElement & { getLayout?: (page: JSX.Element) => JSX.Element },
  options?: Omit<RenderOptions, "queries"> & {
    /**
     * Adds the user to the store before rendering the component
     */
    withUser?: boolean;
    /**
     * whether to connect with the socket or not.
     */
    connectWithSocket?: boolean;
  }
): RenderResult & { store: ReturnType<typeof createStore> } => {
  const store = createStore();

  // For example testing the user panel the user must be loggedIn. Hence this option will let us add the user beforehand.

  if (options?.withUser)
    store.dispatch(
      authActions.login({
        token: "fake token",
        user: { username: "tester", profileImage: "http://test-image" },
      })
    );
  const getLayout = ui.getLayout || ((page) => page);
  const renderResult = render(
    <Provider {...{ store }}>
      <SocketProvider
        connectionString="http://localhost:4000"
        connect={options?.connectWithSocket || false}
      >
        <ThemeProvider theme={defaultTheme}>{getLayout(ui)}</ThemeProvider>
      </SocketProvider>
    </Provider>,
    {
      queries: { ...queries },
      ...options,
    }
  );
  return { ...renderResult, store };
};

export * from "@testing-library/react";
export { customRender as render };
