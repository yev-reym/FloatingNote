import React from 'react';
import ReactDOM from 'react-dom';
import {login,logout} from './utils/session_api_util';
import {signup,checkEmail} from './utils/users_api_util';
// import configureStore from '';


document.addEventListener('DOMContentLoaded',()=>{
    const root = document.getElementById('root');

    //window testing
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.checkEmail = checkEmail;


    //

    ReactDOM.render(<h1>Suhh Dud</h1>,root);
});