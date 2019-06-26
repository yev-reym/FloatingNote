import React from 'react';
import TrackItem from './track_item';

export const TrackIndex = ({tracks, uploaders}) => {

    const mappedTracks = tracks.map((track ) => {

      return ( 
          <li key={track.id}>
            <TrackItem
            track={track}
            uploader={uploaders[track.uploader_id]}
            /> 
        </li>
        );
       
    });
    
    return (
        <ul className="slider-container">
            {mappedTracks}
        </ul>
        );
};