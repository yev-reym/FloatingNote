import React from 'react';
import {connect} from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const mapStateToProps = state => (
    {loggedIn: state.session.id}
);

const Authorize = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={props => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/" />
            )
    )} />

);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={props => (
        loggedIn ? (
            <Redirect to='/discover' />
        ) : (
            <Component {...props} />
            )
    )} />

);

export const AuthRoute = withRouter(connect(mapStateToProps,null)(Authorize));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
