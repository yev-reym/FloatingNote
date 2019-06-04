

export const fetchTracks = () => {
        return $.ajax({
            method: 'GET',
            url: 'api/tracks'
        });
};

export const fetchTrack = (track) => {
    return $.ajax({
        method: 'GET',
        url: `api/tracks/${track.id}`
    });
};

export const createTrack = (track) => {
    return $.ajax({
        method: 'POST',
        url: 'api/tracks',
        data: {
            track
        }
    });
};

export const updateTrack = (track) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/tracks/${track.id}`,
        data:{
            track
        }
    });
};