import React from "react";
import { Button, Text, Input, Box, Center, Flex } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import MyButton from "../../components/MyButton";
import {
  TriangleDownIcon,
  TriangleUpIcon,
  ArrowLeftIcon,
} from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

function Account() {
  return (
    <Box height="100vh" backgroundColor="gray.300">
      {/* nav */}
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

      {/* döviz hesap */}

      <Flex
        padding="5"
        borderRadius="15"
        margin="10px"
        bgColor="white"
        w="-moz-max-content"
        flexDir="column"
      >
        <Text fontSize="2xl" marginBottom="3">
          Döviz Hesapları:
        </Text>
        <Tabs variant="soft-rounded" colorScheme="gray" size="lg" w="500px">
          <TabList>
            <Tab>Dolar</Tab>
            <Tab>Euro</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Text
                fontSize="3xl"
                display="flex"
                flexDir="row"
                alignItems="center"
              >
                155.153 <Text fontWeight="bold">$</Text>
              </Text>
            </TabPanel>
            <TabPanel>
              <Text
                fontSize="3xl"
                display="flex"
                flexDir="row"
                alignItems="center"
              >
                123.123.123 <Text fontWeight="bold">€</Text>
              </Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>

      {/* düz hesap */}

      <Flex
        padding="5"
        borderRadius="15"
        margin="10px"
        bgColor="white"
        w="-moz-max-content"
        flexDir="column"
      >
        <Text fontSize="2xl" marginBottom="3">
          Turk Lirası Hesapları:
        </Text>
        <Tabs variant="soft-rounded" colorScheme="gray" size="lg" w="500px">
          <TabList>
            <Tab>Vadeli</Tab>
            <Tab>Vadesiz</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Text
                fontSize="3xl"
                display="flex"
                flexDir="row"
                alignItems="center"
              >
                155.153 <Text fontWeight="bold">₺</Text>
              </Text>
            </TabPanel>
            <TabPanel>
              <Text
                fontSize="3xl"
                display="flex"
                flexDir="row"
                alignItems="center"
              >
                123.123.123 <Text fontWeight="bold">₺</Text>
              </Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
      <Flex
        padding="5"
        borderRadius="15"
        margin="10px"
        bgColor="white"
        w="-moz-max-content"
        flexDir="column"
      >
        <Flex justifyContent="space-between">
          <Input
            type="number"
            maxW="550px"
            variant="filled"
            placeholder="Para Miktarı"
          />
          {/* hesaplarım menüsü */}
          <Menu closeOnSelect={false}>
            <MenuButton
              marginLeft="5px"
              maxW="250px"
              as={Button}
              colorScheme="gray"
            >
              Hesaplarım
            </MenuButton>
            <MenuList>
              <MenuOptionGroup type="radio">
                <MenuItemOption value="vadeli">Vadeli ₺</MenuItemOption>
                <MenuItemOption value="vadesiz">Vadesiz ₺</MenuItemOption>
                <MenuDivider />
                <MenuItemOption value="dolar">Dolar $</MenuItemOption>
                <MenuItemOption value="euro">Euro €</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </Flex>
        <Flex justifyContent="space-evenly" marginTop="5">
          <Button
            fontSize="large"
            borderRadius="15"
            boxShadow="dark-lg"
            size="md"
            w="150px"
            justifyContent="space-around"
            rightIcon={<TriangleDownIcon />}
            colorScheme="red"
            variant="solid"
          >
            Para Çek
          </Button>
          <Button
            fontSize="large"
            borderRadius="15"
            boxShadow="dark-lg"
            size="md"
            w="150px"
            justifyContent="space-around"
            rightIcon={<TriangleUpIcon />}
            colorScheme="whatsapp"
            variant="solid"
          >
            Para Yatır
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Account;
