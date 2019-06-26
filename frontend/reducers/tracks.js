import { RECEIVE_TRACK, RECEIVE_TRACKS, EDIT_TRACK, REMOVE_TRACK} from '../actions/track_actions';
import { merge } from 'lodash';


const tracksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_TRACKS:
            newState = {};
            action.tracks.forEach(track => newState[track.id] = track);
            return merge( oldState, newState);
        case RECEIVE_TRACK:
            return merge({}, oldState, {[action.track.id]: action.track});
        case EDIT_TRACK:
            return merge({}, oldState, { [action.track.id]: action.track });
        case REMOVE_TRACK:
            newState = merge({},oldState);
            delete newState[action.trackId];
            return newState;
        default:
            return oldState;
    }
};





export default tracksReducer;