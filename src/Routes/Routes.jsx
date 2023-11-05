import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Assignment from "../pages/Assignment/Assignment";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";
import MyAssignment from "../pages/MyAssignment/MyAssignment";
import SubmittedAssignment from "../pages/SubmittedAssignment/SubmittedAssignment";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signUp',
            element: <SignUp></SignUp>
        },
        {
            path: '/assignment',
            element: <Assignment></Assignment>
        },
        {
            path: '/createAssignment',
            element: <CreateAssignment></CreateAssignment>
        },
        {
            path: '/myAssignment',
            element: <MyAssignment></MyAssignment>
        },
        {
            path: '/submittedAssignment',
            element: <SubmittedAssignment></SubmittedAssignment>
        }
      ]
    },
  ]);


  export default router;