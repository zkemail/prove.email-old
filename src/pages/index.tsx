import Navbar from '@/components/Navbar';
import MainPage from '@/components/MainPage';
import Hero from '@/sections/Hero';
// import About from '@/sections/About';
// import Features from '@/sections/Features';
import { ChakraProvider, ColorModeScript, Box } from "@chakra-ui/react";
import theme from "../components/theme";

import styles from '@/styles/Homepage.module.css';


export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="dark" />
      <Navbar/>
      <MainPage/>
    </ChakraProvider>
  )
}