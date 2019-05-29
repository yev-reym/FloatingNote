import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, LOGOUT_CURRENT_USER } from '../actions/auth_actions';
import { merge } from 'lodash';

const _nullUser = Object.freeze({
    id: null
});

const sessionReducer = (state=_nullUser, action) =>{
            Object.freeze(state);
            switch (action.type) {
                case RECEIVE_CURRENT_USER:
                    return merge({},state,{id: currentUser.id});
                case LOGOUT_CURRENT_USER:
                    return _nullUser;
                default:
                    return state;
            }
};

export default sessionReducer;