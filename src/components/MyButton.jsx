import React from "react";
import { Link } from "react-router-dom";
import { Text, Input, Box, Button, Flex } from "@chakra-ui/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";

function MyButton(yazi, to, ...probs) {
  return (
    <Link to={to}>
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
        {...probs}
      >
        {yazi}
      </Button>
    </Link>
  );
}

export default MyButton;
