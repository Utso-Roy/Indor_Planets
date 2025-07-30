import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const PrivateRoute = () => {

    const { user } = useContext(AuthContext)
    console.log(user)

    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;