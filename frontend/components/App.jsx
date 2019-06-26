import React from 'react';
import {Switch,Route} from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import Modal from './session/modal';
import NavBarContainer from './nav/nav_bar_container';
import LogoutContainer from './logout/logout_container';
import {AuthRoute, ProtectedRoute} from '../utils/route_util';
import TrackFormContainer from './tracks/track_form_container';
import TrackShowContainer from './tracks/track_show_container';
import NavBarLess from './nav/nav_bar_missing';
import Discover from './discover/discover';


const App = () => (
    <>
    <Switch>
        <Route exact path='/' component={NavBarLess} />
        <Route path='/' component={NavBarContainer} />
    </Switch>
    <Modal />
    <Switch>
        <Route path='/logout' component={LogoutContainer} />
        <Route path='/upload' component={TrackFormContainer} />
        <Route path='/discover' component={Discover} />
        <Route path='/:username/:trackId' component={TrackShowContainer} />
        <ProtectedRoute exact path='/' component={SplashContainer} />
    </Switch>
    </>
);

export default App;