import * as TrackAPIUtil from '../utils/tracks_api_util';

export const RECEIVE_PLAYER_INFO = 'RECEIVE_PLAYER_INFO';
export const PLAY = "PLAY";
export const PAUSE = "PAUSE";
export const UPDATE_TRACK_TIME = "UPDATE_TRACK_TIME";
export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';
export const RECEIVE_SCRUBBER_PERCENTAGE = 'RECEIVE_SCRUBBER_PERCENTAGE';
export const CLEAR_SCRUBBER_PERCENTAGE = 'CLEAR_SCRUBBER_PERCENTAGE';

export const receivePlayerInfo = (trackInfo) => {
    return {
        action: RECEIVE_PLAYER_INFO,
        trackInfo
    };
};

export const play = () => {
    return {
        action: PLAY
    };
};

export const pause = () => {
    return {
        action: PAUSE
    };
};

export const updateTrackTime = (currentTime) => {
    return {
        action: UPDATE_TRACK_TIME,
        currentTime
    };
};

export const receiveCurrentTrack = ({ track, uploader }) => {
    return {
        type: RECEIVE_CURRENT_TRACK,
        currentTrack: track,
        uploader
    };
};

export const receiveScrubberPercentage = (percentage) => {
    return {
        type: RECEIVE_SCRUBBER_PERCENTAGE,
        percentage
    };
};

export const clearScrubberPercentage = () => {
    return {
        type: CLEAR_SCRUBBER_PERCENTAGE,
    };
};

export const fetchCurrentTrack = (id) => (dispatch) => {
        return TrackAPIUtil.fetchTrack(id).then(payload => dispatch(receiveCurrentTrack(payload)) );
};



