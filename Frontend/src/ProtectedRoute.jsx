import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { StoreContext } from './Contex'; //Assuming you have this context

const ProtectedRoute = ({ children }) => {
    const { token } = useContext(StoreContext);

    if (!token) {
        // If no token, redirect to the home page or login page
        return <Navigate to="/" />;
    }

    // If token exists, render the children (the protected page)
    return children;
};

export default ProtectedRoute;
