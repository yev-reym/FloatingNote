import React from 'react';
import ReactDOM from 'react-dom';
import {login,logout} from './actions/auth_actions';
import {signup,infoCheck} from './utils/users_api_util';
import configureStore from './store/store';
import Root from './components/Root';


document.addEventListener('DOMContentLoaded',()=>{
    const root = document.getElementById('root');

    let store;
    if (window.currentUser) {
        store = configureStore({ session: { currentUser: window.currentUser } });
        // delete window.currentUser;
    } else {
        store = configureStore();
    }

    //window testing
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.infoCheck = infoCheck;
    window.store = store;
    window.dispatch = store.dispatch;

    //

    ReactDOM.render(<Root store={store}/>, root);
});