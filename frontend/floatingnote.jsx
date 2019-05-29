import React from 'react';
import ReactDOM from 'react-dom';
import {login,logout} from './utils/session_api_util';
import {signup,checkEmail} from './utils/users_api_util';
import configureStore from './store/store';
import Root from './components/Root';


document.addEventListener('DOMContentLoaded',()=>{
    const root = document.getElementById('root');
    const store = configureStore();

    //window testing
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.checkEmail = checkEmail;


    //

    ReactDOM.render(< Root store={store} />, root);
});