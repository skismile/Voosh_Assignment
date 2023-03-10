import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  Box,
  Flex,
  FormLabel,
  Input,
  useToast,
  Center,
  Heading,
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";

import { postData } from "../Logic/api";

const Signup = () => {
  const [formData, setFormdata] = useState({
    name: "",
    phoneNumber: "",
    password: "",
  });
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.name == "" ||
      formData.phoneNumber == "" ||
      formData.password == ""
    ) {
      alert("fill all input");
      return;
    }

    try {
      // s://awful-frog-sunglasses.cyclic.app
      let d = await postData("https://awful-frog-sunglasses.cyclic.app/user/add-user", formData);
      console.log(d);
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (e) {
      toast({
        title: `${e?.response.data}` || "Signup Failed",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Box>
      <Flex bg="gray.100" justify="center" p="10">
        <Box
          bg="white"
          p={5}
          rounded="md"
          w={["90%", "70%", "50%", "40%", "35%"]}
          borderTopRightRadius={"30"}
          borderBottomLeftRadius={"30"}
        >
          <Center>
            {" "}
            <Heading>
              Sign<span style={{ color: "#4fd675" }}>Up</span>
            </Heading>
          </Center>
          <Box textAlign={"left"} p={10}>
            <form onSubmit={handleSubmit}>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="name"
                name="name"
                type={"text"}
                onChange={handleChange}
              />
              <FormLabel>Phone Number</FormLabel>
              <Input
                placeholder="Phone Number"
                name="phoneNumber"
                type={"number"}
                onChange={handleChange}
              />
              <FormLabel mt={2}>Password</FormLabel>
              <Input
                placeholder="password"
                name="password"
                type={"password"}
                onChange={handleChange}
              />

              <Input
                mt={10}
                type="submit"
                value="Signup"
                color={"white"}
                bg="#4fd675"
                w="full"
                borderTopRightRadius={"30"}
                borderBottomLeftRadius={"30"}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                }}
              />
            </form>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Signup;
