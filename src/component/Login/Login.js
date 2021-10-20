import {getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import React from 'react';
import { Button } from 'react-bootstrap';
import initializeAuthentication from '../../Firebase/firebase.init';
import './Login.css';


initializeAuthentication();
const googleProvider = new GoogleAuthProvider();


const Login = () => {
    const auth = getAuth();

    const handleGoogleSingIn = () =>{
        signInWithPopup(auth,googleProvider)
        .then(result =>{
            const user = result.user;
        })
    }
    return (
        <>
            <div >

                <div className="login-from">

                    <h2>Please Login</h2>

    
                    <input className="email-input"placeholder="Email" type="email" /><br />
                    <div className="password-area">
                    
                    <input className="password-input"placeholder="Password" type="password" name="Password" value="" />
                    <br />
                    <Button className="login-btn" variant="outline-secondary">Login</Button>{' '}

                   <Button  onClick={handleGoogleSingIn} className="login-btn" variant="outline-primary">Google Sign In</Button>{' '}


                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;