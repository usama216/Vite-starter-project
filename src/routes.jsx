import { useNavigate, useRoutes } from "react-router";
import Landing from "./Pages/LandingPage/Landing";
import Signup_Main from "./Pages/Authentication_Page/Signup/Signup_Main";
import Login_Main from "./Pages/Authentication_Page/Login/Login_Main";
import Forget_Password from "./Pages/Authentication_Page/Components/Forget_Password";
import Password_Confirmation from "./Pages/Authentication_Page/Components/Password_Confirmation";
import Change_Password from "./Pages/Authentication_Page/Components/Change_Password";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProtectedRoutes from '../src/components/ProtectedRoutes/ProtectedRoutes'
import AdminMain from '../src/Admin/AdminMain'
import SellerMain from "./Seller/SellerMain";
import Main from "./Pages/Authentication_Page/Main";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import ShopMain from "./Pages/ShopPage/ShopMain";
import TermsConditions from "./Pages/Components/TermsConditions";
import PrivacyPolicy from "./Pages/Components/PrivacyPolicy";
import CookiesPolicy from "./Pages/Components/CookiesPolicy";
import SingleProduct from "./Pages/ShopPage/SingleProduct";
import ComingSoon from "./components/ComingSoon";
export default function Router() {

    const [progress, setProgress] = useState(0);

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
console.log(isAuthenticated, 'hgyfuhhj')
    const navigate = useNavigate();




    let element = useRoutes([

        {

            element: <ProtectedRoutes isLogged={isAuthenticated} />,
            children: [{ path: "/seller/dashboard", element: <SellerMain /> }],
          },

        {
            path:'/admin/dashboard',
            element : <AdminMain /> ,
           },

        {
            path:'/product/:id',
            element : <SingleProduct /> ,
           },


        {
        path:'/',
        element : <Landing /> ,
       },

    // {
    //     path:'/',
    //     element : <ComingSoon /> ,
    //    },


       {
        path:'/signup',
        element : <Main /> ,
       },
       {
        path:'/forget-password',
        element : <Forget_Password/> ,
       },
       {
        path:'/otp-verification',
        element : <Password_Confirmation/> ,
       },
       {
        path:'/set-password',
        element : <Change_Password/> ,
       },

       {
        path:'/about',
        element : <AboutUs/>
       },
       {
        path:'/contact-us',
        element : <ContactUs/> ,
       },

       {
        path:'/terms-&-conditions',
        element : <TermsConditions/> ,
       },
       {
        path:'/privacy-policy',
        element : <PrivacyPolicy/> ,
       },

       {
        path:'/cookies-policy',
        element : <CookiesPolicy/> ,
       },

       {
        path:'/shop',
        element : <ShopMain/> ,
       },

    ])
    return element
}