// src/pages/index.tsx
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import MainPage from '@/components/MainPage';
import BlogComponent from '@/components/Blog';
import { ChakraProvider, ColorModeScript, Box } from "@chakra-ui/react";
import theme from "../components/theme";
import styles from '@/styles/Homepage.module.css';

export default function App() {
  const router = useRouter();
  const { page } = router.query;

  const handleNavClick = (navItem: string) => {
    router.push('/' + navItem);
  }

  let Component;
  switch (page) {
    case 'home':
    case undefined:
      Component = MainPage;
      break;
    case 'blog':
      Component = BlogComponent;
      break;
    default:
      Component = () => <div>Page not found</div>;
      break;
  }

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="dark" />
      <Navbar onNavClick={handleNavClick} />
      <Component />
    </ChakraProvider>
  )
}