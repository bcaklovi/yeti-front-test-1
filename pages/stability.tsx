import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Flex,
  Spacer,
  Center,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import {
  BsQuestionCircle
} from "react-icons/bs";
import type { NextPage } from "next";
import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
  colors: {
    brand: {
      300: "#9AC5FF",
      500: "#4B97FF",
      600: "#227DF7",
      700: "#0B5ECE",
      800: "#0046A5",
      1000: "#002454",
    },
    secondary: {
      400: "#FF998A",
    },
    other: {
      100: "#80A6DF",
      200: "#3685FD",
    },
  },
});


const Stability: NextPage = () => {

  return (

    <ChakraProvider theme={theme}>

      <Flex flexDir="column" p={3} bg="brand.1000" minH="100vh" alignItems="center">

        <Flex flexDir="row" mt={8}>

          <Flex flexDir="column" w="80%">

            <Flex flexDir="row">
              <Button color="other.100" mr={10} fontWeight="bold" bg="brand.1000" size="md" borderRadius={15}>Home</Button>
              <Button color="white" mr={10} fontWeight="bold" bg="brand.500" size="md" borderRadius={15}>Borrow</Button>
              <Button color="other.100" mr={10} fontWeight="bold" bg="brand.1000" size="md" borderRadius={15}>Stake</Button>
              <Button color="other.100" mr={10} fontWeight="bold" bg="brand.1000" size="md" borderRadius={15}>Farm</Button>
              <Button color="other.100" mr={50} fontWeight="bold" bg="brand.1000" size="md" borderRadius={15}>Dashboard</Button>
            </Flex>

          </Flex>

          <Flex flexDir="column" w="20%" justifyContent="flex-end" alignItems="right">
            <Button color="white" fontWeight="bold" bg="secondary.400" size="md" borderRadius={15}>Connect Wallet</Button>
          </Flex>

        </Flex>

        <Flex flexDir="row" mt={10} w="80vw" h="30vh" bg="brand.800" justifyContent="center" borderRadius={15}>
          <Flex alignItems="center" >
              <Text color="white" fontSize="78px" fontWeight="bold">Pool</Text>
          </Flex>
        </Flex>

        <Flex flexDir="row" mt={5} w="80vw" h="30vh">

          <Flex flexDir="column" bg="brand.800" w="50%" borderRadius={15}>
            <Flex flexDir="row" pl={5} pt={5}>
              <Text color="white" fontSize="xl" fontWeight="bold">Provide/Withdraw</Text>
            </Flex>
            <Flex flexDir="row" pt={6} pl={5}>
              <Flex flexDir="column" w="50%">

                <Flex flexDir="row">
                  <Text color="white" fontSize="sm" fontWeight="bold">Provide YUSD</Text>
                  <Flex pt={1.5} pl={1}><BsQuestionCircle color="#3685FD" size="11px"/></Flex>
                </Flex>

                <InputGroup mt={3} w="70%">
                  <InputLeftElement
                    pointerEvents="none"
                    color="brand.300"
                    fontSize="xs"
                    children="$"
                  />
                  <Input placeholder='0.0' borderColor="brand.700" borderWidth={2} />
                  <InputRightElement children={<Text color="brand.300" fontSize="xs" pr={0.5}>≈ $0</Text>} />
                </InputGroup>

                <Button bg="brand.600" color="white" mt={3} w="40%" maxH="33px" fontSize="sm">Provide</Button>

              </Flex>
              <Flex flexDir="column" w="50%">

                <Flex flexDir="row">
                  <Text color="white" fontSize="sm" fontWeight="bold">Withdraw YUSD</Text>
                  <Flex pt={1.5} pl={1}><BsQuestionCircle color="#3685FD" size="11px"/></Flex>
                </Flex>

                <InputGroup mt={3} w="70%">
                  <InputLeftElement
                    pointerEvents="none"
                    color="brand.300"
                    fontSize="xs"
                    children="$"
                  />
                  <Input placeholder='0.0' borderColor="brand.700" borderWidth={2} />
                  <InputRightElement children={<Text color="brand.300" fontSize="xs" pr={0.5}>≈ $0</Text>} />
                </InputGroup>

                <Button bg="brand.600" color="white" mt={3} w="40%" maxH="33px" fontSize="sm">Withdraw</Button>

              </Flex>
            </Flex>
          </Flex>

          <Flex flexDir="column" bg="brand.800" w="25%" ml={5} borderRadius={15}>

          </Flex>

          <Flex flexDir="column" bg="brand.800" w="25%" ml={5} borderRadius={15}>

          </Flex>

        </Flex>

      </Flex>


    </ChakraProvider>
  );

}

export default Stability;
