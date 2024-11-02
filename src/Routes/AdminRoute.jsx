import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation()
    // console.log(location);
    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if(user && isAdmin){
        
        return children
    }else{
        return <Navigate to='/login' state={{from:location}}replace:true></Navigate>
    }
    
};

export default AdminRoute;