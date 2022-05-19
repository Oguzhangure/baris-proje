import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Lblinput from "./Lblinput";
import { Button, Text, Input, Box, Center, Flex } from "@chakra-ui/react";

function InputArea() {
  return (
    <Flex
      flexDir="column"
      paddingX="10"
      bgColor="gray.300"
      w="600px"
      borderRadius="25"
      boxShadow="dark-lg"
    >
      <Box alignItems="baseline" w="500px" paddingY="5">
        <Text fontWeight="semibold" fontSize="lg">
          Kullanıcı Adı:
        </Text>
        <Input
          borderRadius="15"
          boxShadow="dark-lg"
          variant="filled"
          placeholder="Enter Username"
        />
      </Box>
      <Box alignItems="baseline" w="500px" paddingY="10">
        <Text fontWeight="semibold" fontSize="lg">
          Şifre:
        </Text>
        <Input
          borderRadius="15"
          boxShadow="dark-lg"
          variant="filled"
          placeholder="Enter password"
          type="password"
        />
      </Box>
      <Center alignItems="center" w="500px" paddingY="10">
        <Button
          borderRadius="15"
          size="md"
          w="150px"
          rightIcon={<ArrowForwardIcon />}
          colorScheme="blackAlpha"
          bgColor="black"
          variant="solid"
        >
          Giriş
        </Button>
      </Center>
    </Flex>
  );
}

export default InputArea;
