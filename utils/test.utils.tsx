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
import { createStore } from "@store";
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
): RenderResult & { store: ReturnType<typeof createStore> } => {
  const store = createStore();
  const renderResult = render(
    <Provider {...{ store }}>
      <ThemeProvider theme={defaultTheme}>{ui}</ThemeProvider>
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
