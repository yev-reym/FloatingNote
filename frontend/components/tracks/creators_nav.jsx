import React from 'react';
import {NavLink} from 'react-router-dom';

export default (props) => {
    return (
        <ul className='creator-nav-container'>
            <NavLink to='/upload' className="" activeClassName="clicked-nav">Upload</NavLink>
            <NavLink to='/you/tracks' activeClassName="clicked-nav">Your Tracks</NavLink>
            <NavLink to={`/${props.profile_url}/stats`} activeClassName="clicked-nav">Stats</NavLink>
        </ul>
    );
};