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
import AdvanceCourseMain from "./Pages/AdvanceCoursePage/AdvanceCourseMain";
import BegginerCoursesMain from "./Pages/BegginerCoursesPage/BegginerCoursesMain";
import AdvanceCoursePriceMain from "./Pages/AdvanceCoursePrice/AdvanceCoursePriceMain";
import BegginerCoursePriceMain from "./Pages/BegginerCoursePrice/BegginerCoursePriceMain";
import BlogsPageMain from "./Pages/BlogsPage/BlogsPageMain";
import BlogDetailPage from "./Pages/BlogsPage/BlogDetailPage";
import FAQMain from "./Pages/FAQPage/FAQMain";
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
        path:'/advance-course',
        element : <AdvanceCourseMain /> ,
       },


       {
        path:'/begginer-course',
        element : <BegginerCoursesMain /> ,
       },

       {
        path:'/advance-course-price',
        element : <AdvanceCoursePriceMain /> ,
       },


       {
        path:'/begginer-course-price',
        element : <BegginerCoursePriceMain/> ,
       },


       {
        path:'/blogs',
        element : <BlogsPageMain/> ,
       },


       {
        path:'/blog-detail',
        element : <BlogDetailPage/> ,
       },


       {
        path:'/faqs',
        element : <FAQMain/> ,
       },





    ])
    return element
}