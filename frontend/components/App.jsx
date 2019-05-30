import React from 'react';
import {Switch,Route} from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import Modal from './session/modal';


const App = () => (
    <>
    <Modal />
    <Switch>
        <SplashContainer />
    </Switch>
    </>
);

export default App;