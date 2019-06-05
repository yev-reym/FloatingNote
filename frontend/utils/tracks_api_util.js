

export const fetchTracks = () => {
        return $.ajax({
            method: 'GET',
            url: 'api/tracks'
        });
};

export const fetchTracksByUser = (user) => {
    return $.ajax({
        method: 'GET',
        url: 'api/tracks',
        data:{
            user
        }
    });
};

export const fetchTrack = (track) => {
    return $.ajax({
        method: 'GET',
        url: `api/tracks/${track.id}`
    });
};

export const deleteTrack = (track) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/tracks/${track.id}`
    });
};

export const uploadTrack = (formData) => {
    return $.ajax({
        method: 'POST',
        url: 'api/tracks',
        data: formData,
        contentType: false,
        processData: false
    });
};

export const updateTrack = (formData) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/tracks/${track.id}`,
        data: formData,
        contentType: false,
        processData: false
    });
};