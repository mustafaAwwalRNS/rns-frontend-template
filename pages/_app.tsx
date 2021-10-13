import { GlobalStyles } from "@styles";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@styles";
import type { AppPropsWithLayout } from "@types";
const MyApp = ({ Component, pageProps }: AppPropsWithLayout): JSX.Element => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
};
export default MyApp;
