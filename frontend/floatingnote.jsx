import React from 'react';
import ReactDOM from 'react-dom';
import {login,logout} from './actions/auth_actions';
import {fetchTrack} from './actions/track_actions';
import {signup,infoCheck} from './utils/users_api_util';
import { fetchTracks, uploadTrack, updateTrack, fetchTracksByUser } from './utils/tracks_api_util';
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
    window.fetchTracks = fetchTracks;
    window.fetchTrack = fetchTrack;
    window.uploadTrack = uploadTrack;
    window.updateTrack = updateTrack;
    window.fetchTracksByUser = fetchTracksByUser;
    //

    ReactDOM.render(<Root store={store}/>, root);
});