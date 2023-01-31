import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  Box,
  Flex,
  FormLabel,
  Input,
  useToast,
  Heading,
  Center,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { addOrderAction } from "../Redux/action";

let init = {
  sub_total: "",
};
const AddOrders = () => {
  const [formData, setFormdata] = useState(init);
  const dispatch = useDispatch();
  const toast = useToast();
  const store = useSelector((store) => store.all.loggedUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    if (formData.phoneNumber == "" || formData.sub_total == "") {
      alert("fill all input");
      return;
    }
    // console.log(store);
    let res = await dispatch(
      addOrderAction({
        ...formData,
        user_id: store.user_id,
        phoneNumber: store.phoneNumber,
      })
    );

    if (res.message === "order created succesfully") {
      toast({
        title: "order created succesfully",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: `${res.message}`,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }

    setFormdata(init);
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
              Add<span style={{ color: "#4fd675" }}>Orders</span>
            </Heading>
          </Center>
          <Box textAlign={"left"} p={10}>
            <form onSubmit={handleSubmit}>
              <FormLabel mt={2}>Sub Total</FormLabel>
              <Input
                placeholder="Sub Total"
                name="sub_total"
                type={"number"}
                value={formData.sub_total}
                onChange={handleChange}
              />

              <Input
                mt={10}
                type="submit"
                value="Add Order"
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

export default AddOrders;
