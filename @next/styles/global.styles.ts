import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;    
    }
    body,html {
         margin: 0;
         padding: 0;
    }
    body {
        background-color: ${({
          theme: {
            colors: { background },
          },
        }) => background};
    }

`;
