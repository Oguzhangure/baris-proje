import React from "react";
import InputArea from "../../components/InputArea";
import { Button, Input, Center } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Login = () => {
  return (
    <Center flexDir="column" h="100vh">
      <InputArea></InputArea>
    </Center>
  );
};

export default Login;
