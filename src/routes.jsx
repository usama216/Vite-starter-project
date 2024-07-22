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





    ])
    return element
}