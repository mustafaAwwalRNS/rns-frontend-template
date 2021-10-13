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

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
): RenderResult =>
  render(<ThemeProvider theme={defaultTheme}>{ui}</ThemeProvider>, {
    queries: { ...queries },
    ...options,
  });

export * from "@testing-library/react";
export { customRender as render };
