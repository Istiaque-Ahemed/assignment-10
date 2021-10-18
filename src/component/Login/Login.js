import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <>
           <div >
              <h2>Please Login</h2>
              
                  <input type="email" /> <br />
              
                  <div className="login-from">
                  <input type="password" />
                  </div>
               </div> 
        </>
    );
};

export default Login;