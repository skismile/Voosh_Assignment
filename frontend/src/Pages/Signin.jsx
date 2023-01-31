
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  Box,
  Flex,
  FormLabel,
  Input,
  Image,
  useToast,
  Select,
  Heading,
  Center,
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";

import { userSigninAction } from "../Redux/action";


const Signin = () => {
  const [formData, setFormdata] = useState({
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



  const handleSubmit =async (e) => {
    e.preventDefault();
if(formData.phoneNumber==""||formData.password=="")
{
alert("fill all input")
  return
}

 let res=await dispatch(userSigninAction(formData))

console.log(res,"singgg")

if(res.message==="Login Success"){
  toast({
    title: "Login Success.",
    status: "success",
    duration: 2000,
    isClosable: true,
    position: "top",
  });
  setTimeout(() => {
    navigate("/");
  }, 2000);
} 


else{
  toast({
    title: `${res.message}`,
    status: "error",
    duration: 3000,
    isClosable: true,
    position: "top",
  });

     

}


  }

  return (
    <Box >
      <Flex bg="gray.100" justify="center" p="10"  >
        <Box bg="white" p={5} rounded="md" w={["90%","70%","50%","40%", "35%"]} borderTopRightRadius={"30"}
                borderBottomLeftRadius={"30"} >
         <Center> <Heading>Sign<span style={{color:"#4fd675"}} >in</span></Heading></Center>
          <Box textAlign={"left"} p={10}>
            <form onSubmit={handleSubmit}>
        
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
                value="Signin"
                color={"white"}
                bg="#4fd675"
                w="full"
                borderTopRightRadius={"30"}
                borderBottomLeftRadius={"30"}
                _hover={{
                  boxShadow:"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                  
                
                }}
              />
            </form>
        
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};








export default Signin;