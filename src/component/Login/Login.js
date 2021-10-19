import React from 'react';
import { Button } from 'react-bootstrap';
import './Login.css';

const Login = () => {
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

                   <Button className="login-btn" variant="outline-primary">Primary</Button>{' '}


                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;