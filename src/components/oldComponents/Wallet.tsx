import { Box, Flex, Heading, Link, Text, Button, useColorMode, Stack, Image, Center, SimpleGrid, VStack } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
// import { TokenSelector } from "@uniswap/react-ui";
import TokenSelector from "./TokenSelector";

// inside your WalletPage component

const WalletPage = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const blueColor = useColorModeValue("blue.100", "blue.900");
    const grayColor = useColorModeValue("gray.200", "gray.800");

  return (
    <Box>
      <Center flexDirection="column" minHeight="100vh">
        <Box my={16}>
          <TokenSelector/>
        </Box>
      </Center>
    </Box>
  );
};

export default WalletPage;
