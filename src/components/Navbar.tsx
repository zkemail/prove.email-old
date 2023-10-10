import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  Button,
  useColorMode,
  Stack,
  Image,
  Center,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

import NextLink from "next/link";
import { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

interface NavbarProps {
  onNavClick: (navItem: string) => void;
}
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // console.log("Color mode is: ", colorMode);

  return (
    <Flex
      bg={colorMode === "dark" ? "black.500" : "white.500"}
      px={{ base: 4, md: 12 }}
      py={6}
      justifyContent="space-between"
      alignItems="center"
    > 
      <Flex align="center">
        <Box flex="1">
          <Image
            src="https://i.imgur.com/ExRee8h.png"
            alt="Email"
            height="1.5em"
            objectFit="cover"
          />
        </Box>
        <Link
          as={NextLink}
          href="/"
          color={colorMode === "dark" ? "white" : "black"}
          mx={2}
          fontWeight="bold"
        >
          PROOF OF EMAIL
        </Link>
      </Flex>
      <Box>
        <Link
          as={NextLink}
          href="/blog"
          color={colorMode === "dark" ? "white" : "black"}
          mx={{base:2, md: 4}}
        >
          Blog
        </Link>
        <Link
          as={NextLink}
          href="https://github.com/zkemail"
          color={colorMode === "dark" ? "white" : "black"}
          mx={{base:2, md: 4}}
          target="_blank"
          rel="noopener noreferrer"
        >
          Docs
        </Link>
        <Link
          as={NextLink}
          href="#demos"
          color={colorMode === "dark" ? "white" : "black"}
          mx={{base:2, md: 4}}
        >
          Demo
        </Link>
        <Link
          as={NextLink}
          href="https://t.me/yush_g"
          color={colorMode === "dark" ? "white" : "black"}
          mx={{base:2, md: 4}}
        >
          Contact
        </Link>
      </Box>
      <Button onClick={toggleColorMode} mx={{ base: 2, sm: 4, md: 16}} p={0}>
        {colorMode === "dark" ? (
          <FaMoon size="1.2em" />
        ) : (
          <FaSun size="1.2em" />
        )}
      </Button>
    </Flex>
  );
};

export default Navbar;
