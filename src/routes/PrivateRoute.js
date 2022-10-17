import React, { useContext } from 'react';
import { AuthContext } from '../context/UserContext';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;