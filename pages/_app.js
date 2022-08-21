import { useEffect } from "react";
import { GlobalStyle, theme } from "styles";
import { ThemeProvider } from "styled-components";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
