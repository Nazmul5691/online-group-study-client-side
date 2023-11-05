/* eslint-disable react/prop-types */
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    // console.log(location);

    if(loading){
        return <span className="loading loading-spinner text-primary"></span>
    }


    if(user?.email){
        return children;
    }

    return <Navigate state={location} to='/login' replace></Navigate>
};

export default PrivateRoute;