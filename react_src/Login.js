// Login.js
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Login = ({ onLoginSuccess }) => {
    const handleSuccess = (response) => {
        console.log(response);
        onLoginSuccess();
    };

    const handleError = (error) => {
        console.error(error);
    };

    return (
        <div className="container mt-4 text-center">
            <h2>Login with Google</h2>
            <GoogleOAuthProvider clientId="390899400310-6j78dt8uhau9cd18jjv8iqf72je2alvg.apps.googleusercontent.com">
                <GoogleLogin
                    onSuccess={handleSuccess}
                    onError={handleError}
                />
            </GoogleOAuthProvider>
        </div>
    );
};

export default Login;