import { useRoutes } from "react-router";
import Landing from "./Pages/LandingPage/Landing";
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
,





    ])
    return element
}