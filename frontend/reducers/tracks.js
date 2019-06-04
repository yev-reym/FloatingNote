import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, LOGOUT_CURRENT_USER } from '../actions/auth_actions';
import { merge } from 'lodash';


const tracksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return null;
        default:
            return state;
    }
};





export default tracksReducer;