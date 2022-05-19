import React from "react";
import { Button, Text, Input, Box, Center, Flex } from "@chakra-ui/react";
import MyButton from "../../components/MyButton";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";

function Account() {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p="5"
      backgroundColor="gray.300"
    >
      <Text fontSize="5xl">Hoşgeldin Sea</Text>
      <Button
        fontSize="large"
        borderRadius="15"
        boxShadow="dark-lg"
        size="md"
        w="150px"
        justifyContent="space-around"
        rightIcon={<ArrowLeftIcon />}
        colorScheme="blackAlpha"
        bgColor="black"
        variant="solid"
      >
        Geri
      </Button>
    </Flex>
  );
}

export default Account;
