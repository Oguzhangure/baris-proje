import React from "react";
import { Text, Input, Box, Center, Flex } from "@chakra-ui/react";

function Lblinput(lblText, asd) {
  return (
    <Box alignItems="baseline" w="500px" paddingY="10">
      <Text fontSize="lg">{lblText}</Text>
      <Input
        borderRadius="15"
        boxShadow="dark-lg"
        variant="filled"
        placeholder={asd}
      />
    </Box>
  );
}

export default Lblinput;
