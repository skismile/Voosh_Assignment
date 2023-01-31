import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuDivider,
  Menu,
  MenuList,
  Avatar,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from "../Redux/action";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const store=useSelector(store=>store.all)
  console.log(store);
  const navigate = useNavigate();
  const dispatch=useDispatch()
  return <Flex w={"100%"} bg={"#4fd675"} h="80px" alignItems={"center"} justifyContent="space-around">
    {/* <Link style={{color:"white",fontWeight:"bold"}} to="/">Home</Link> */}
    <Link style={{color:"white",fontWeight:"bold"}} to="/addorder">Add Oredrs</Link>
    <Link style={{color:"white",fontWeight:"bold"}} to="/myorders">My Orders</Link>
    {store.isAuth?<Button bg="none" color={"white"} onClick={()=>{
dispatch(userLogoutAction())
    }} >Logout</Button>:<Link style={{color:"white",fontWeight:"bold"}} to="/">Sign In</Link>}
    {store.isAuth?<Text bg="none" color={"white"} fontSize="20" >{store.loggedUser.name}</Text> :<Link style={{color:"white",fontWeight:"bold"}} to="/signup">Sign Up</Link>}
  </Flex>
 }