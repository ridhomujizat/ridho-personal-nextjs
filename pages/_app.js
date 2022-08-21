import { useEffect, useState } from "react";
import { GlobalStyle, theme } from "styles";
import { ThemeProvider } from "styled-components";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMoundted] = useState(false)

  useEffect(() => {
    setIsMoundted(true)
  }, [])
  

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
     {isMounted && <Component {...pageProps} />}
    </ThemeProvider>
  );
}

export default MyApp;
