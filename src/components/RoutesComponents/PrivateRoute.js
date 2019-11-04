import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../store/AuthContext';

export function PrivateRoute({ path, component }) {
    const { user } = useContext(AuthContext);
    
    if (!user) return <Redirect to='/login' />
    return (
        <Route path={path} component={component} />
    )
}