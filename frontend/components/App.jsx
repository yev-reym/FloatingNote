import React from 'react';
import {Switch,Route} from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import Modal from './session/modal';
import NavBarContainer from './nav/nav_bar_container';
import LogoutContainer from './logout/logout_container';
import {AuthRoute, ProtectedRoute} from '../utils/route_util';
import TrackFormContainer from './tracks/track_form_container';
import NavBarLess from './nav/nav_bar_missing';


const App = () => (
    <>
    <Switch>
        <Route exact path='/' component={NavBarLess} />
        <Route path='/' component={NavBarContainer} />
    </Switch>
    <Modal />
    <Switch>
        <Route path='/upload' component={TrackFormContainer} />
        <Route path='/logout' component={LogoutContainer} />
        <Route path='/discover' component={NavBarContainer} />
        <ProtectedRoute path='/' component={SplashContainer} />
    </Switch>
    </>
);

export default App;