import React from 'react';
import {Switch,Route} from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import Modal from './session/modal';
import NavBarContainer from './nav/nav_bar_container';
import LogoutContainer from './logout/logout_container';
import {AuthRoute, ProtectedRoute} from '../utils/route_util';
import TrackFormContainer from './tracks/create/track_form_container';
import TrackShowContainer from './tracks/show/track_show_container';
import NavBarLess from './nav/nav_bar_missing';
import DiscoverContainer from './discover/discover_container';


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
        <Route path='/discover' component={DiscoverContainer} />
        <Route path='/:username/:trackId' component={TrackShowContainer} />
        <ProtectedRoute exact path='/' component={SplashContainer} />
    </Switch>
    </>
);

export default App;