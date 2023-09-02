import Navbar from "@/components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../components/theme";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
