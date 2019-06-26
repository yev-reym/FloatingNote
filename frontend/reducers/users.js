import { RECEIVE_CURRENT_USER, RECEIVE_NEW_USERNAME} from '../actions/auth_actions';
import { RECEIVE_TRACK, RECEIVE_TRACKS } from '../actions/track_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({},state, {[action.currentUser.id]: action.currentUser});
        case RECEIVE_NEW_USERNAME:
            return merge({},state, action.payload);
        case RECEIVE_TRACK:
            return merge({}, state, {[action.uploader.id]: action.uploader});
        case RECEIVE_TRACKS:
            const newState = {};
            action.uploaders.forEach(uploader => newState[uploader.id] = uploader);
            return merge({}, state, newState);
        default:
            return state;
    }
};

export default usersReducer;
