import { Box, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getData } from "../Logic/api";

const MyOrders = () => {
  const store = useSelector((store) => store.all.loggedUser);
  const [data, setData] = useState([]);
  useEffect(() => {
    http://localhost:8080/
    getData(`https://awful-frog-sunglasses.cyclic.app/order?userId=${store.user_id}`).then(
      (res) => {
        console.log(res);
        setData(res);
      }
    );
  }, []);
  return (
    <Box p="10">
      <Heading>Total Orders :<span style={{
        color:"#4fd675"
      }} > {data?.length}</span></Heading>
      {data?.map((ele) => {
        return (
          <Box p="5" key={ele._id} color="white" h="100px" bg="#4fd675" mt={10}  borderRadius="10">
            Order id : {ele._id}
            <br />
            Sub Total : {ele.sub_total}
          </Box>
        );
      })}
    </Box>
  );
};

export default MyOrders;
