import { Box, Flex, Heading, Link, Text, Button, useColorMode, Stack, Image, Center, SimpleGrid, VStack, Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import Navbar from "@/components/oldComponents/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
// import theme from "./theme";
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
            <VStack align="center">
              <Box bg={grayColor} p={2} borderRadius="lg" boxShadow="lg">
                <Heading as="h2" size="l">
                  The future of verifiable interactions
                </Heading>
              </Box>
              <Heading as="h1" m={4} textAlign="center">
                Prove information from your existing emails, on-chain
              </Heading>
              <Heading size="l" mx={{base: 4, sm: 12}} mt={4} textAlign="center">Verify cryptography already built in to your inbox, anonymously on Ethereum.</Heading>
            </VStack>
          </Center>
        </Box>

        <Center id="demos">
          <Heading as="h2" size="lg">
            On Chain Applications
          </Heading>
        </Center>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={4} mx={{ base: 4, md: 48 }}>
        <Box bg={grayColor} p={5} mx={4} borderRadius="md" boxShadow="lg">
            <Heading size="md">Email Wallet</Heading>
            <Text mt={2}>Send money to any existing email address, just by sending an email.</Text>
            <Center>
              <Button mt={4} colorScheme="teal" whiteSpace="normal" onClick={() => window.open("https://sendeth.org", "_blank")}>
                Try Testnet Demo
              </Button>
            </Center>
          </Box>
          <Box bg={grayColor} p={5} mx={4} borderRadius="md" boxShadow="lg">
            <Heading size="md">ZK P2P</Heading>
            <Text mt={2}>Peer to peer marketplace for decentralized onramp/offramp to Ethereum via Venmo and other payment services.</Text>
            <Center>
              <Button mt={4} colorScheme="teal" whiteSpace="normal" onClick={() => window.open("https://zkp2p.xyz/", "_blank")}>
                Try Testnet Demo
              </Button>
            </Center>
          </Box>
        </SimpleGrid>

        <Box my={16}>
          <Center id="demos">
            <Heading as="h2" size="lg">
              Proof of Identity Applications
            </Heading>
          </Center>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={4} mx={{ base: 4, md: 48 }}>
            <Box bg={grayColor} p={5} borderRadius="md" boxShadow="lg">
              <Heading size="md">Proof of Twitter</Heading>
              <Text mt={2}>Prove you own a Twitter username, via proving any email from Twitter.</Text>
              <Center>
                <Button mt={4} colorScheme="teal" whiteSpace="normal" onClick={() => window.open("https://zkemail.xyz", "_blank")}>
                  Mint Twitter Proof
                </Button>
              </Center>
            </Box>
            <Box bg={grayColor} p={5} borderRadius="md" boxShadow="lg">
              <Heading size="md">Proof of Github</Heading>
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
              <Heading size="md">Proof of KYC</Heading>
              <Text mt={2}>Prove you are a real human without revealing who you are, via combining known KYCs from Airbnb, Coinbase, etc.</Text>
              <Center>
                <Button mt={4} colorScheme="teal" whiteSpace="normal" onClick={() => window.open("https://anonkyc.com/", "_blank")}>
                  Try demo
                </Button>
              </Center>
            </Box>
          </SimpleGrid>
        </Box>
        {/* <Center id="demos">
            <Heading as="h2" size="lg">
              Use Our SDKs
            </Heading>
          </Center>
          <SimpleGrid spacing={3} columns={{ base: 1, md: 2, lg: 3 }}>          <Card>
            <CardHeader>
              <Heading size='md'>Regex Compiler</Heading>
            </CardHeader>
            <CardBody>
              <Text>Convert your regex into circom or halo2.</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Heading size='md'>ZK-Email Circuits and Contracts</Heading>
            </CardHeader>
            <CardBody>
              <Text>Use our helpers in our SDK.</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Heading size='md'>Auto-Deployed API</Heading>
            </CardHeader>
            <CardBody>
              <Text>Automatically deploy an endpoint to a massive cloud prover.</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
        </SimpleGrid> */}
        <Box mb={8} mx={{ base: 10, md: 20, lg: 80 }}>
          <Center>
            <Heading as="h2" size="lg" my={8}>
              Build Your Own
            </Heading>
          </Center>
            <VStack align="center">
              <Text mx={{ base: 4, md: 12, lg: 24 }} mb={6}>
                <b>Features:</b> No trusted hardware. No trusted attestation servers. Only trust zero knowledge proofs, smart contracts, email, and DNS infrastructure.
                <br/>
                <b>Learn:</b> We directly verify the signatures on your emails within a zk proof, including regex parsing within zk. Read our
                {" "}
                <Link as="a" href="https://blog.aayushg.com/posts/zkemail/" color="teal.500">
                  blog post
                </Link>
                {" "}
                to understand the core email proving technology, or watch our
                {" "}
                <Link as="a" href="https://www.youtube.com/watch?v=sPCHiUT3TmA&t=769s" color="teal.500">
                  technical presentation
                </Link>
                {" "}
                to understand how the email wallet technology works.
                <br/>
                <b>Ask Questions:</b> Join our {" "}
                <Link as="a" href="https://t.me/+SYqeeJ7qI3I4OWQx" color="teal.500">
                  our developer Telegram group
                </Link> 
                {" "} to ask questions or get help setting up!
              </Text>

              <Box bg={grayColor} p={5} borderRadius="md" boxShadow="lg">
                <VStack align="center">
                  <Heading size="md">Start Building</Heading>
                  <Text mt={2}>Design via our open source, MIT licensed SDKs.</Text>
                  <Button mt={4} colorScheme="teal" whiteSpace="normal" onClick={() => window.open("https://www.npmjs.com/search?q=%40zk-email", "_blank")}>
                    Access SDK
                  </Button>
                </VStack>
              </Box>
              <Box mt={4}>
                <Image src="https://i.imgur.com/46VRTCF.png" alt="Email Stamp" maxH="250px" objectFit="contain" />
              </Box>
            </VStack>
        </Box>
        <Box mb={8} mx={{ base: 10, md: 20, lg: 80 }} p={{ base: 10, md: 10, lg: 10 }} bg={grayColor} borderRadius="md" boxShadow="lg">
          <Center>
            <Heading as="h2" size="lg">
              Contribute to Core
            </Heading>
          </Center>
          <Box mt={4}>
            <Text>
              <br/>
              - Work with incredible folks like Aayush, Sora, Saleel, Rasul, Tyler, and Andy! 
              <br/>
              - Check our {" "}
              <Link as="a" href="https://github.com/zkemail" color="teal.500">
                org readme
              </Link> 
              {" "} for a list of possible projects related to zk-email. 
              <br/>
              - Message {" "}
              <Link as="a" href="https://t.me/yush_g" color="teal.500">
                us
              </Link> 
              {" "} with any questions!
            </Text>
            </Box>        
          </Box>
      </Center>
    </Box>
  );
};

export default MainPage;
