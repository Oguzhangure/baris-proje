import React from "react";
import { Text, Input, Box, Center, Flex } from "@chakra-ui/react";

// çalıştıramadığım için bu şekilde yaptım sen Lblinput componentini çağıdığında problarını belirlemen gerekiyor

function Lblinput(lblText, plcholder, ...probs) {
  return (
    <Box alignItems="baseline" w="500px" paddingY="10">
      <Text fontSize="lg">{lblText}</Text>
      <Input
        borderRadius="15"
        boxShadow="dark-lg"
        variant="filled"
        placeholder={plcholder}
        {...probs}
      />
    </Box>
  );
}

export default Lblinput;
