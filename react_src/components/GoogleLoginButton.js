import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
    const clientId = '390899400310-6j78dt8uhau9cd18jjv8iqf72je2alvg.apps.googleusercontent.com'; // Replace with your actual Client ID

    const handleSuccess = (response) => {
        console.log('Login Success:', response);
        onSuccess(response); // Handle success callback
    };

    const handleFailure = (error) => {
        console.error('Login Failure:', error);
        onFailure(error); // Handle failure callback
    };

    return (
        <GoogleLogin
            clientId={clientId}
            buttonText="Login with Google"
            onSuccess={handleSuccess}
            onFailure={handleFailure}
            cookiePolicy={'single_host_origin'}
            // You can add additional props as needed
        />
    );
};

export default GoogleLoginButton;
