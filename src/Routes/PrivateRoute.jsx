import React, {useContext} from 'react';
import {AuthContext} from "../Providers/AuthProvider.jsx";
import { Navigate } from "react-router-dom";

const PrivateRoute = ( { children }) => {
    const { user, isLoading } = useContext(AuthContext);

    if(isLoading) {
        return <button className="btn btn-square loading"></button>
    }

    if(user){
        return children;
    }

    return <Navigate to={'/login'} replace={true}></Navigate>
};

export default PrivateRoute;