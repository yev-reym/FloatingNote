import { RECEIVE_CURRENT_USER, RECEIVE_INFO} from '../actions/auth_actions';
import {merge} from 'lodash';

const pendingInfoReducer = (oldState={},action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_INFO:
            return merge({},oldState, action.payload);
        case RECEIVE_CURRENT_USER:
            return merge({},oldState);
        default:
            return oldState;
    }
};

export default pendingInfoReducer;