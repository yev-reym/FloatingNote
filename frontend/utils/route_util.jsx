import React from 'react';
import connext from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const mapStateToProps = state => (
    {loggedIn: state.session.id}
);

const Auth = ({component: Component, path, loggedIn, exact}) => {
    <Route path={path} exact={exact}  render={(props)=>{
        !loggedIn ? (
        <Component {...props} />
    ) : (
        <Redirect to='/' />
    );
    }} />
    
};

const Protected = ({ component: Component, path, loggedIn, exact }) => {
    <Route path={path} exact={exact} render={(props) => {
        loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to='/' />
            );
    }} />

};