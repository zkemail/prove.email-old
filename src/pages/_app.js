import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

function App({ Component, pageProps }) {
  return (                                                                           
    <>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          {!useRouter().asPath.includes("/blog/") ? <CSSReset /> : null}                                    
        </ColorModeProvider>
        <Navbar />
      <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
