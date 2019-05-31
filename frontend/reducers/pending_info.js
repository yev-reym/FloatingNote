import { RECEIVE_CURRENT_USER, RECEIVE_INFO} from '../actions/auth_actions';
import {merge} from 'lodash';
import { CLOSE_MODAL } from '../actions/modal_actions';

const _nullUser = Object.freeze({
    pendingInfo: null
});


const pendingInfoReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_INFO:
            return merge({}, oldState, action.payload);
        case RECEIVE_CURRENT_USER:
            return _nullUser;
        case CLOSE_MODAL:
            return _nullUser;
        default:
            return oldState;
    }
};

export default pendingInfoReducer;