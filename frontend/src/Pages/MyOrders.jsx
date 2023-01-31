import {Box} from "@chakra-ui/react"
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getData } from "../Logic/api";

const MyOrders = () => {


const store=useSelector(store=>store.all.loggedUser)
const[data,setData]=useState([])
  useEffect(()=>{


getData(`http://localhost:8080/order?userId=${store.user_id}`).then((res)=>{
  console.log(res)
  setData(res)
})


  },[])
  return (
    <Box>
{
data?.map((ele)=>{


return <Box key={ele._id}  h="100px" bg="#4fd675" mt={10} >
  
  Order id : {ele._id}
  <br />
  Sub Total : {ele.sub_total}

</Box>

})

}


    </Box>
  );
}

export default MyOrders