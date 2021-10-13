import { GlobalStyles } from "@styles";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@styles";
import type { AppPropsWithLayout } from "@types";
import { createStore } from "@store";
import { Provider } from "react-redux";
const store = createStore();
const MyApp = ({ Component, pageProps }: AppPropsWithLayout): JSX.Element => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Provider {...{ store }}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </Provider>
    </>
  );
};
export default MyApp;
