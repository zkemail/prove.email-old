import { Box, Flex, Heading, Link, Text, Button, useColorMode, Stack, Image, Center, SimpleGrid, VStack } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

// inside your MainPage component

const MainPage = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const blueColor = useColorModeValue("blue.100", "blue.900");
    const grayColor = useColorModeValue("gray.200", "gray.800");

  return (
    <Box>
      <Center flexDirection="column" minHeight="100vh">
        <Box my={16}>
          <Center>
            <Heading as="h1" mb={8}>
              Proof of Email
            </Heading>
          </Center>
          <Flex direction="row" mx={40}>
            <VStack align="start">
              <Heading as="h2" size="l">
                The future of identity verification and transactions on Ethereum
              </Heading>
              <Text mt={4}>No MPC assumptions. No trusted hardware. No trusted attestation servers. Only trust smart contracts, email, and DNS infrastructure.</Text>
            </VStack>
          </Flex>
        </Box>

        <Box my={16}>
          <Center>
            <Heading as="h2" size="lg">
              Applications
            </Heading>
          </Center>
          <SimpleGrid columns={3} spacing={10} mt={4} mx={24}>
            <Box bg={grayColor} p={5} borderRadius="md" boxShadow="lg">
              <Heading size="md">Email Wallet</Heading>
              <Text mt={2}>Email a relayer in order to transfer money or transact on Ethereum, anonymously.</Text>
              <Center>
                <Button mt={4} colorScheme="teal" whiteSpace="normal" onClick={() => window.open("https://sendeth.org", "_blank")}>
                  Try Testnet Demo
                </Button>
              </Center>
            </Box>
            <Box bg={grayColor} p={5} borderRadius="md" boxShadow="lg">
              <Heading size="md">ZK Proof of Twitter</Heading>
              <Text mt={2}>Prove you own a Twitter username, via proving any email from Twitter.</Text>
              <Center>
                <Button mt={4} colorScheme="teal" whiteSpace="normal" onClick={() => window.open("https://zkemail.xyz", "_blank")}>
                  Mint Twitter Proof
                </Button>
              </Center>
            </Box>
            <Box bg={grayColor} p={5} borderRadius="md" boxShadow="lg">
              <Heading size="md">ZK Proof of Github</Heading>
              <Text mt={2}>Prove you committed to a Github repo via proving emails of contribution invitation.</Text>
              <Center>
                <Button
                  mt={4}
                  colorScheme="teal"
                  whiteSpace="normal"
                  onClick={() => window.open("https://www.loom.com/share/4a280711e0944cecbe680149cf4de02b?sid=d1247bf1-d78c-4295-81be-832f9ceaa8b8", "_blank")}
                >
                  Watch demo
                </Button>
              </Center>
            </Box>
            <Box bg={grayColor} p={5} borderRadius="md" boxShadow="lg">
              <Heading size="md">Proof of Organization</Heading>
              <Text mt={2}>Prove you own an email address corresponding to some domain via ZK JWTs.</Text>
              <Center>
                <Button mt={4} colorScheme="teal" whiteSpace="normal" onClick={() => window.open("https://nozee.xyz", "_blank")}>
                  Try on Nozee
                </Button>
              </Center>
            </Box>
            <Box bg={grayColor} p={5} borderRadius="md" boxShadow="lg">
              <Heading size="md">ZK KYC</Heading>
              <Text mt={2}>Prove you are a unique human, via combining known KYCs from Airbnb, Coinbase, etc.</Text>
              <Center>
                <Button mt={4} colorScheme="teal" whiteSpace="normal" onClick={() => window.open("https://anonkyc.com/", "_blank")}>
                  Try demo
                </Button>
              </Center>
            </Box>
            <Box bg={grayColor} p={5} borderRadius="md" boxShadow="lg">
              <Heading size="md">Build your own?</Heading>
              <Text mt={2}>Design via our open source, MIT licensed SDKs.</Text>
              <Center>
                <Button mt={4} colorScheme="teal" whiteSpace="normal" onClick={() => window.open("https://www.npmjs.com/search?q=%40zk-email", "_blank")}>
                  Access SDK
                </Button>
              </Center>
            </Box>
          </SimpleGrid>
        </Box>

        <Box mb={8} mx={40} bg={blueColor} borderRadius="md" boxShadow="lg">
          <Center>
            <Heading as="h2" size="lg" my={8}>
              Technology
            </Heading>
          </Center>
          <Flex mb={2}>
            <Center flex="1">
              <Text mx={16} mb={6}>
                We directly verify the signatures on your emails within a zk proof, including regex parsing within zk. Read our
                {" "}
                <Link as="a" href="https://blog.aayushg.com/posts/zkemail/" color="teal.500">
                  blog post
                </Link>
                {" "}
                to understand the technology, or watch our
                {" "}
                <Link as="a" href="https://www.youtube.com/watch?v=sPCHiUT3TmA&t=769s" color="teal.500">
                  technical presentation
                </Link>
                {" "}
                to understand how the tech works.
              </Text>
            </Center>
            <Center flex="1">
              <Box ml={4} my={8}>
                <Image src="https://i.imgur.com/ldMC1J7.png" alt="Email Town" maxH="250px" objectFit="contain" />
              </Box>
            </Center>
          </Flex>
        </Box>

        <Box mb={8} mx={40}>
          <Center>
            <Heading as="h2" size="lg">
              Work with Us
            </Heading>
          </Center>
          <Text mt={4}>Help us expand our vision! Projects include email recovery with multisigs, better designs, architecture for anonymous wallets, identity verification methods on various attestation platforms, working to onboard new people to crypto, and in-person experiments. Dm @yush_g on Twitter or join our (upcoming) Telegram and Discord! </Text>
        </Box>
      </Center>
    </Box>
  );
};

export default MainPage;
