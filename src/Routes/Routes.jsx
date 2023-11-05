import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Assignment from "../pages/Assignment/Assignment";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";
import MyAssignment from "../pages/MyAssignment/MyAssignment";
import SubmittedAssignment from "../pages/SubmittedAssignment/SubmittedAssignment";
import PrivateRoute from "./PrivateRoute";

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
            element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
        },
        {
            path: '/myAssignment',
            element: <PrivateRoute><MyAssignment></MyAssignment></PrivateRoute>
        },
        {
            path: '/submittedAssignment',
            element: <PrivateRoute><SubmittedAssignment></SubmittedAssignment></PrivateRoute>
        }
      ]
    },
  ]);


  export default router;