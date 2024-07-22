import React from 'react';

const Login = () => {
    const googleLogin = () => {
        window.location.href = "/oauth2/authorization/google";
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={googleLogin}>Login with Google</button>
        </div>
    );
};

export default Login;
