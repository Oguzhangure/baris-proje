import React from "react";
import { Text, Input, Box, Center, Flex } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function BATabs(
  tab1Currency,
  tab1Name,
  tab1Value,
  lblText,
  tab2Currency,
  tab2Name,
  tab2Value
) {
  return (
    <Flex
      padding="5"
      borderRadius="15"
      margin="10px"
      bgColor="white"
      w="-moz-max-content"
      flexDir="column"
    >
      <Text fontSize="2xl" marginBottom="3">
        {lblText}
      </Text>
      <Tabs variant="soft-rounded" colorScheme="gray" size="lg" w="500px">
        <TabList>
          <Tab>{tab1Name}</Tab>
          <Tab>{tab2Name}</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text
              fontSize="3xl"
              display="flex"
              flexDir="row"
              alignItems="center"
            >
              {tab1Value} <Text fontWeight="bold">{tab1Currency}</Text>
            </Text>
          </TabPanel>
          <TabPanel>
            <Text
              fontSize="3xl"
              display="flex"
              flexDir="row"
              alignItems="center"
            >
              {tab2Value} <Text fontWeight="bold">{tab2Currency}</Text>
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default BATabs;
