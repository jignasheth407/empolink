import React from 'react'
import { Redirect } from 'react-router-dom'

class ProtectedRoute extends React.Component {

    render() {
        const isAuthenticated = localStorage.getItem('token');
       
        return isAuthenticated ? (
            <div> is authenticated </div>
            ) : (
            <Redirect to={{ pathname: '/login' }} />
        );
    }
}

export default ProtectedRoute;