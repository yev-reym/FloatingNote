import * as UserAPIUtil from '../utils/users_api_util';
import * as SessionAPIUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_NEW_USERNAME = 'RECEIVE_NEW_USERNAME';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_INFO_ERRORS = 'RECEIVE_INFO_ERRORS';
export const RECEIVE_INFO = 'RECEIVE_INFO';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


export const receiveCurrentUser = (currentUser) => (
    {type: RECEIVE_CURRENT_USER, currentUser}
);

export const logoutCurrentUser = () => (
    { type: LOGOUT_CURRENT_USER}
);

export const receiveSessionErrors = (errors) => (
    {type: RECEIVE_SESSION_ERRORS, errors}
);

export const receiveInfoErrors = (errors) => (
    { type: RECEIVE_INFO_ERRORS, errors }
);

export const receiveInfoResponse = (payload) => (
    { type: RECEIVE_INFO, payload}
);

export const receiveNewUsername = (payload) => (
    { type: RECEIVE_NEW_USERNAME, payload }
);

export const clearErrors = () => (
    {type: CLEAR_ERRORS}
);

export const confirmInfo = info => dispatch => {

    return UserAPIUtil.infoCheck(info).then(
        res => {
            dispatch(receiveInfoResponse(res));
        },
        err => dispatch(receiveInfoErrors(err.responseJSON)
        ));
};


export const signup = user => dispatch => {

    return UserAPIUtil.signup(user).then(user => {
      
        return dispatch(receiveCurrentUser(user));
    },
    err => {
        dispatch(receiveSessionErrors(err.responseJSON));
    });
};

export const login = user => dispatch => {
    return SessionAPIUtil.login(user).then(user => dispatch(receiveCurrentUser(user)),
        err => {
            dispatch(receiveSessionErrors(err.responseJSON));
        });
};

export const logout = () => dispatch => (
    SessionAPIUtil.logout().then(() => dispatch(logoutCurrentUser(null),
        err => dispatch(receiveSessionErrors(err.responseJSON))))
);

export const updateUsername = (user) => dispatch => (
    UserAPIUtil.updateUsername(user).then((payload) => dispatch(receiveNewUsername(payload),
        err => dispatch(receiveSessionErrors(err.responseJSON))))
);

export const resetErrors = () => dispatch => (
    dispatch(clearErrors())
);

