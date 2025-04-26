import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Contact from "../Pages/Contact/Contact";



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
        }
      ]
    },
  ]);