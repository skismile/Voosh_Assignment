import { Route, Routes } from "react-router-dom";
import AddOrders from "../Pages/addOrders";
import MyOrders from "../Pages/MyOrders";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import PrivateRoute from "./PrivateRoute";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/addorder"
        element={
          <PrivateRoute>
            <AddOrders />
          </PrivateRoute>
        }
      />
      <Route
        path="/myorders"
        element={
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
