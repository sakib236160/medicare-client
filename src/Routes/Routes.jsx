import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Contact from "../Pages/Contact/Contact";
import AvailableCamps from "../Pages/AvailableCamps/AvailableCamps";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/", 
            element:<Home></Home>
        },
        {
          path:"/contact-us",
          element:<Contact></Contact>
        },
        {
          path:"/available-camps",
          element:<AvailableCamps></AvailableCamps>
        }
      ]
    },
  ]);