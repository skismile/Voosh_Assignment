import { Route, Routes } from "react-router-dom";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";


export default function AllRoutes(){


return <Routes>

<Route path="/signin" element={<Signin/>} />
<Route path="/signup" element={<Signup/>} />
<Route path="/" element={"home"} />


</Routes>



}