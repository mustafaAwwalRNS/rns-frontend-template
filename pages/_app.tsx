import { GlobalStyles } from "@styles";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@styles";
import type { AppPropsWithLayout } from "@types";
import { createStore } from "@store";
import { Provider } from "react-redux";
import { nextMock } from "@mocks";
import { SocketProvider } from "@sockets";
nextMock();
const store = createStore();
const MyApp = ({ Component, pageProps }: AppPropsWithLayout): JSX.Element => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Provider {...{ store }}>
        <ThemeProvider theme={defaultTheme}>
          <SocketProvider
            connect={false}
            connectionString="http://localhost:4000"
          >
            <GlobalStyles />
            {getLayout(<Component {...pageProps} />)}
          </SocketProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
};
export default MyApp;
