import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUP from "../Pages/SignUP/SignUP";
import About from "../Pages/Home/About/About";

import BookService from "../Pages/BookService/BookService";
import Booking from "../Pages/Bookings/Booking";
import PrivateRoute from "./PrivateRoute";






const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
            
        },
        {
          path:'/about',
          element:<About></About>
          
      },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUP></SignUP>   
        },
        {
          path:'book/:id',
          element:<BookService></BookService>, 
          loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`) 
      },
        {
         path:'bookings',
         element:<PrivateRoute><Booking></Booking></PrivateRoute>
      }
      ]
      
    },
])

export default router;