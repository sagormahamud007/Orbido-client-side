import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Pages/Home/Home";
import Features from "../Pages/Features/Features";
import Solution from "../Pages/Solution/Solution";
import AboutUs from "../Pages/About Us/AboutUs";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/aboutUs',
        element:<AboutUs></AboutUs>
    },
    {
        path:'/features',
        element:<Features></Features>
    },
    {
        path:'/solution',
        element:<Solution></Solution>
    },
   

        ]
    }
])