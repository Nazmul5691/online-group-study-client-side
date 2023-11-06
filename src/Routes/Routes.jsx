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
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import UpdateAssignment from "../pages/UpdateAssignment/UpdateAssignment";
import ViewAssignment from "../pages/ViewAssignment/ViewAssignment.JSX";
import AssignmentSubmissionPage from "../pages/AssignmentSubmissionPage/AssignmentSubmissionPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
        },
        {
            path: '/updateAssignment/:id',
            element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/updateAssignment/${params.id}`)
        },
        {
            path: '/viewAssignment/:id',
            element: <PrivateRoute><ViewAssignment></ViewAssignment></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/viewAssignment/${params.id}`)
        },
        {
            path: '/assignmentSubmissionPage/:id',
            element: <PrivateRoute><AssignmentSubmissionPage></AssignmentSubmissionPage></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/assignmentSubmissionPage/${params.id}`)
        }
      ]
    },
  ]);


  export default router;