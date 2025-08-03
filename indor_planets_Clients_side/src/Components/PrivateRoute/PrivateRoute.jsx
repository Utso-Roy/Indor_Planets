import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../../Loading/Loading';

const PrivateRoute = ({children}) => {

    const { user,loading } = useContext(AuthContext)


  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};




export default PrivateRoute;