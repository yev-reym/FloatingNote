import React from 'react';
import {NavLink} from 'react-router-dom';

export default (props) => {
    return (
        <nav className='creator-nav-container'>
            <ul className="tab-container" >
                <NavLink  activeClassName="active-tab" to='/upload'>Upload</NavLink>
                <NavLink to='/you/tracks' activeClassName="active-tab">Your Tracks</NavLink>
                <NavLink to={`/${props.profile_url}/stats`} activeClassName="active-tab">Stats</NavLink>
            </ul>
        </nav>
      
    );
};