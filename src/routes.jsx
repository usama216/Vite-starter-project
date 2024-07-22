import { useNavigate, useRoutes } from "react-router";
import Landing from "./Pages/LandingPage/Landing";
import Forget_Password from "./Pages/Authentication_Page/Components/Forget_Password";
import Password_Confirmation from "./Pages/Authentication_Page/Components/Password_Confirmation";
import Change_Password from "./Pages/Authentication_Page/Components/Change_Password";
import { useState } from "react";
import { useSelector } from "react-redux";
import AdminMain from '../src/Admin/AdminMain'
import Main from "./Pages/Authentication_Page/Main";

import SingleProduct from "./Pages/ShopPage/SingleProduct";
import ComingSoon from "./components/ComingSoon";
import AboutUs from "./Pages/AboutUS/AboutUs";
import ContactUs from "./Pages/ContactUs";
import SignUp from "./Pages/Auth/SignUp";
import SignIn from "./Pages/Authentication_Page/SignIn/SignIn";
import ForgetPassword from "./Pages/Authentication_Page/ForgetPassword/ForgetPassword";
import CreatePassword from "./Pages/Authentication_Page/CreatePassword/CreatePassword";
export default function Router() {



    let element = useRoutes([



        {
        path:'/',
        element : <Landing /> ,
       },


       {
        path:'/about-us',
        element : <AboutUs /> ,
       },


       {
        path:'/contact-us',
        element : <ContactUs /> ,
       },
        
       {
        path:'/sign-up',
        element : <SignUp /> ,
       },
       {
        path:'/sign-in',
        element : <SignIn /> ,
       },
       {
        path:'/forget-password',
        element : <ForgetPassword /> ,
       },
       {
        path:'/create-password',
        element : <CreatePassword /> ,
       }





    ])
    return element
}