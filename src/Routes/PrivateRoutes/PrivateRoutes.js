import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../firebase/AuthContext';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(UserContext)
    const location = useLocation();
    
    if (loading) {
       return <p className='text-3xl text-center'>loading..........</p>
    }
    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace />
};

export default PrivateRoutes;