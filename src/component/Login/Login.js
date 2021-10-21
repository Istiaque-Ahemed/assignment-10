import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification,sendPasswordResetEmail,updateProfile } from "firebase/auth";

import React from 'react';
import { useState } from "react";
import { Button, Col, FormCheck } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import initializeAuthentication from '../../Firebase/firebase.init';
import './Login.css';


initializeAuthentication();
const googleProvider = new GoogleAuthProvider();


const Login = () => {
    const [name,setName]=useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLogin, setIsLogin] = useState(false);

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }
    const handleNameChange = e =>{
        setName(e.target.value)
    }
    const handleRegistration = e => {
        e.preventDefault()

        if (password.length < 6) {
            setError(' Password should be at least 6 characters')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case')
            return;
        }
        if (isLogin) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password)
        }
    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const auth = getAuth();



    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const setUserName =()=>{
        updateProfile(auth.currentUser, {
            displayName: name})
            .then(result => { })
        }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }
    const handelResatPass =()=>{
        sendPasswordResetEmail(auth, email)
        .then(result=>{ })

    }
    const handleGoogleSingIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
            })
    }
    return (
        <>
            <div >

                <div className="login-from">

                    <h2>Please {isLogin ? 'Login' : 'Registar'}</h2>

                   {!isLogin && <div><input onBlur={handleNameChange} className="email-input" placeholder="Name" type="text" /> <br/><br/></div>}

                    <input onBlur={handleEmailChange} className="email-input" placeholder="Email" type="email" required /><br />
                    <div className="password-area">

                        <input onBlur={handlePasswordChange} className="password-input" placeholder="Password" type="password" name="Password" />
                        <br />
                        <div className="text-danger ps-5 error">
                            {error}
                        </div>
                        <div className="ddd">
                            <div className="check-and-resat">
                                <div className="check-box">
                                    <Col onChange={toggleLogin} >
                                        <FormCheck label="Already Registered?" />
                                    </Col>
                                </div>
                                <div>
                                <Button onclick={handelResatPass}  variant="light">Forget Pass</Button> 

                                </div>
                            </div>
                        </div>
                        <Button onClick={handleRegistration} type="submit" className="login-btn" variant="outline-secondary">{isLogin ? 'Login' : 'Registar'}</Button>{' '}

                        <Button type="submit " onClick={handleGoogleSingIn} className="login-btn" variant="outline-primary">Google Sign In</Button>{' '}


                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;