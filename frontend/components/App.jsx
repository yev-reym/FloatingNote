import React from 'react';
import {Switch,Route} from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import Modal from './session/modal';
import NavBarContainer from './nav/nav_bar_container';
import {AuthRoute, ProtectedRoute} from '../utils/route_util';


const App = () => (
    <>
    <Modal />
    <Switch>
        <NavBarContainer />
        <SplashContainer />
    </Switch>
    </>
);

export default App;