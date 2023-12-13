import React from 'react';
import { useState } from 'react';
import './login.css';

const Login = () => {
  const [action, setAction] = useState('Sign Up');

  return (
    <center><div className='struct'>
       
      <form action=''>
        <h1>{action}</h1>
        <div className='input-box mar'>
          <input type='text' placeholder='Username' required />
        </div>
        {action === 'LOGIN' ? (
          <div></div>
        ) : (
          <div className='input-box mar' >
            <input type='text' placeholder='Email' required />
            {/* Replace IoIosMail with a simple mail icon or another suitable element */}
          </div>
        )}
        <div className='input-box mar'>
          <input type='password' placeholder='Password' required />
        </div>
        {action === 'SIGN UP' ? (
          <div></div>
        ) : (
          <div className='remember-forgot'>
            <label>
              <input type='checkbox' />Remember me
            <a className='space' href='#'>Forgot password?</a>
            </label>
          </div>
        )}
        <div className='sub-cont'>
          <div
            className={action === 'LOGIN' ? 'submit gray' : 'submit'}
            onClick={() => {
              setAction('LOGIN');
            }}
          >
            LOGIN
          </div>
          <div
            className={action === 'SIGN UP' ? 'submit gray' : 'submit'}
            onClick={() => {
              setAction('SIGN UP');
            }}
          >
            SIGN UP
          </div>
        </div>
        <div className='reg-link'>
          <p>
            Don't have an account?
            <a href='#'> Sign Up?</a>
          </p>
        </div>
      </form>
      
    </div> </center>
  );
};

export default Login;
