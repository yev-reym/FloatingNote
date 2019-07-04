import {
      UPDATE_TRACK_TIME, PAUSE, 
      PLAY, RECEIVE_PLAYER_INFO,
      RECEIVE_CURRENT_TRACK,
      RECEIVE_SCRUBBER_PERCENTAGE, 
      CLEAR_SCRUBBER_PERCENTAGE
    } from '../actions/player_actions';
import {LOGOUT_CURRENT_USER} from  '../actions/auth_actions';
import {merge} from 'lodash';

const notPlaying = {currentTrack: null, playing: false, percentage: null};

const trackPlayerReducer = (oldState=notPlaying, action) => {
    Object.freeze(oldState);
    let newState;
    switch(action.type){
        case UPDATE_TRACK_TIME:  
            const currentTime = action.currentTime;
            newState = {currentTime}
            return merge({}, oldState, newState );
        case PAUSE: 
            newState = {playing: false};
            return merge({}, oldState, newState);
        case PLAY:
            newState = {playing: true};
            return merge({}, oldState, newState);
        case RECEIVE_PLAYER_INFO:
            debugger
            const trackInfo = action.trackInfo;
            newState = {trackDuration: trackInfo};
            return merge({}, oldState, newState );
        case RECEIVE_CURRENT_TRACK:
            const {currentTrack, uploader} = action;
            newState = {currentTrack, uploader};
            return merge({}, oldState, newState);
        case RECEIVE_SCRUBBER_PERCENTAGE:
            const {percentage} = action;
            return merge({}, oldState, percentage );
        case CLEAR_SCRUBBER_PERCENTAGE:
            return merge({}, oldState, {percentage: null});
        case LOGOUT_CURRENT_USER:
            newState = notPlaying;
            return merge({}. oldState, newState);
        default: 
            return oldState;
    }

};

export default trackPlayerReducer;