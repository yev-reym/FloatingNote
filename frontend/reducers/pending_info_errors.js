import {
    RECEIVE_INFO_ERRORS,
    RECEIVE_CURRENT_USER,
    CLEAR_ERRORS
} from '../actions/auth_actions';

const pendingInfoErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_INFO_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};

export default pendingInfoErrorsReducer; 