import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Rooms from "../Pages/Rooms";
import MyBooking from "../Pages/MyBooking";
import RoomDetails from "../Pages/RoomDetails";

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
            element:<MyBooking></MyBooking>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        }
      ]
    },
  ]);

  export default router;