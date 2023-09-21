import { Box, Flex, Heading, Link, Text, Button, useColorMode, Stack, Image, Center, SimpleGrid, VStack, Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
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
            <Heading as="h1" mb={8}>
              Proof of Email
            </Heading>
          </Center>
          <Flex direction="row" mx={{ base: 4, md: 40 }}>
            <VStack align="start">
              <Heading as="h2" size="l">
                The future of identity verification and transactions on Ethereum
              </Heading>
              <Text mt={4}>No MPC assumptions. No trusted hardware. No trusted attestation servers. Only trust smart contracts, email, and DNS infrastructure.</Text>
            </VStack>
          </Flex>
        </Box>

        <Box my={16}>
          <Center id="demos">
            <Heading as="h2" size="lg">
              Applications
            </Heading>
          </Center>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} mt={4} mx={{ base: 4, md: 24 }}>
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
              Technology
            </Heading>
          </Center>
          <Flex mb={2}>
            <Center flex="1">
              <Text mx={{ base: 4, md: 8, lg: 12 }} mb={6}>
                We directly verify the signatures on your emails within a zk proof, including regex parsing within zk. Read our
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
              </Text>
            </Center>
            <Center flex="1">
              <Box ml={4} my={8}>
                <Image src="https://i.imgur.com/ldMC1J7.png" alt="Email Town" maxH="250px" objectFit="contain" />
              </Box>
            </Center>
          </Flex>
        </Box>
        <Box mb={8} mx={{ base: 10, md: 20, lg: 80 }} p={{ base: 10, md: 10, lg: 10 }} bg={grayColor} borderRadius="md" boxShadow="lg">
          <Center>
            <Heading as="h2" size="lg">
              Work with Us
            </Heading>
          </Center>
          <Box mt={4}>
            Work with incredible folks like Sora, Saleel, Rasul, Tyler, and Andy! Check our [org readme](https://github.com/zkemail) for a list of possible projects on the core protocol, or independently. If you have questions about cnotributing or [our SDK](https://www.npmjs.com/search?q=%40zk-email), [message our developers Telegram group](https://t.me/+SYqeeJ7qI3I4OWQx) for more discussion, or dm [Aayush](https://t.me/yush_g)/[Sora](https://t.me/sorasue)/[Tyler](https://t.me/AtHeartEngineer) to ask private questions!
            </Box>        
          </Box>
      </Center>
    </Box>
  );
};

export default MainPage;
