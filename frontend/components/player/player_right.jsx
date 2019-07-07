import React from 'react';
import {NavLink} from 'react-router-dom';

const rightPlayer = (props) => {

    const {photoUrl, title, id} = props.currentTrack;
    const {username} = props.uploader;

    return (

        <section className="player-right-container">
            <img src={photoUrl} alt="trackPhoto"/>

            <figcaption className='caption-container'>
                <NavLink className='track-item-title' to={`/${username}/${id}`}>
                    {title}
                </NavLink>
                <NavLink to='/' className="track-item-uploader">
                    {username}
                </NavLink>
            </figcaption>
        </section>
        
    );
};

export default rightPlayer;