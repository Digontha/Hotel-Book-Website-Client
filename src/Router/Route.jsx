import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Rooms from "../Pages/Rooms";
import MyBooking from "../Pages/MyBooking";
import RoomDetails from "../Pages/RoomDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Update from "../Pages/Update";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/rooms",
            element:<Rooms></Rooms>
        },
        {
            path:"/details/:id",
            element:<RoomDetails></RoomDetails>,
            loader:({params})=>fetch(`http://localhost:5000/details/${params.id}`)
        },
        {
            path:"myBooking",
            element:<PrivateRoute><MyBooking></MyBooking></PrivateRoute>
        },
        {
            path:"/bookings/update/:id",
            element:<Update></Update>,
            loader:({params})=>fetch(`http://localhost:5000/bookings/update/${params.id}`)
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        
      ]
    },
  ]);

  export default router;