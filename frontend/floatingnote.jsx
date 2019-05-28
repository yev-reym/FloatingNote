import React from 'react';
import ReactDOM from 'react-dom';
import {signup,login,logout} from './utils/session';
// import configureStore from '';


document.addEventListener('DOMContentLoaded',()=>{
    const root = document.getElementById('root');

    //window testing
    window.signup = signup;
    window.login = login;
    window.logout = logout;

    //

    ReactDOM.render(<h1>Suhh Dud</h1>,root);
});