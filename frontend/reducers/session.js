import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, LOGOUT_CURRENT_USER, RECEIVE_NEW_USERNAME } from '../actions/auth_actions';
import { merge } from 'lodash';

const _nullUser = Object.freeze({
    currentUser: null
});

const sessionReducer = (state=_nullUser, action) =>{
            Object.freeze(state);
            switch (action.type) {
                case RECEIVE_CURRENT_USER:
                    return merge({},state,{currentUser: action.currentUser});
                case LOGOUT_CURRENT_USER:
                    return _nullUser;
                case RECEIVE_SESSION_ERRORS:
                    return state;
                case RECEIVE_NEW_USERNAME:
                    return merge({}, state, { currentUser: action.payload });
                default:
                    return state;
            }
};

export default sessionReducer;