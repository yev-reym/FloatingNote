import * as TrackAPIUtil from '../utils/tracks_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const EDIT_TRACK = 'EDIT_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';


export const receiveTracks = ({tracks, uploaders}) => {
        return {
            type: RECEIVE_TRACKS,
            tracks: Object.values(tracks),
            uploaders: Object.values(uploaders)
        };
};


export const receiveTrack = ({track, uploader}) => {
    return {
        type: RECEIVE_TRACK,
        track,
        uploader
    };
};

export const editTrack = (track) => {
    return {
        type: EDIT_TRACK,
        track
    };
};

export const removeTrack = (track) => {
    return {
        type: REMOVE_TRACK,
        trackId: track.id
    };
};

export const fetchTracks = () => {
    return (dispatch) => {
        return TrackAPIUtil.fetchTracks().then((payload) => {
            dispatch(receiveTracks(payload)); });
    };
};

export const fetchTracksByUser = (user) => {
    return (dispatch) => {
        return TrackAPIUtil.fetchTracksByUser(user).then((tracks) => dispatch(receiveTracks(tracks)));
    };
};

export const fetchTrack = (id) => {
   
    return (dispatch) => {
        return TrackAPIUtil.fetchTrack(id).then((payload) => {
            dispatch(receiveTrack(payload));
        });
    };
};

export const updateTrack = (trackFormData) => {
    return (dispatch) => {
        return TrackAPIUtil.updateTrack(trackFormData).then((track) => dispatch(receiveTrack(track)));
    };
}; 

export const uploadTrack = (trackFormData) => {
    return (dispatch) => {
        return TrackAPIUtil.uploadTrack(trackFormData).then((track) => dispatch(receiveTrack(track)));
    };
}; 

export const deleteTrack = (track) => {
    return (dispatch) => {
        return TrackAPIUtil.deleteTrack(track).then(() => dispatch(removeTrack(track)));
    };
}; 




