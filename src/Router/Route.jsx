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
import ErrorPage from "../Pages/ErrorPage";
import About from "../Pages/About";
import Contact from "../Pages/Contact";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/about",
            element:<About></About>
        },
        {
            path:"/contact",
            element:<Contact></Contact>
        },
        {
            path:"/rooms",
            element:<Rooms></Rooms>
        },
        {
            path:"/details/:id",
            element:<RoomDetails></RoomDetails>,
            loader:({params})=>fetch(`https://assignment-11-server-eight-lake.vercel.app/details/${params.id}`)
        },
        {
            path:"myBooking",
            element:<PrivateRoute><MyBooking></MyBooking></PrivateRoute>
        },
        {
            path:"/bookings/update/:id",
            element:<Update></Update>,
            loader:({params})=>fetch(`https://assignment-11-server-eight-lake.vercel.app/bookings/update/${params.id}`)
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