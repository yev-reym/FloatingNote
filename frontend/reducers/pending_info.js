import { RECEIVE_CURRENT_USER, RECEIVE_INFO} from '../actions/auth_actions';
import {merge} from 'lodash';
import { CLOSE_MODAL } from '../actions/modal_actions';


const pendingInfoReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_INFO:
            return merge({}, oldState, action.payload);
        case RECEIVE_CURRENT_USER:
            return oldState;
        case CLOSE_MODAL:
            return {};
        default:
            return oldState;
    }
};

export default pendingInfoReducer;