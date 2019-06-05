import React from 'react';
import {NavLink} from 'react-router-dom';

export default (props) => {
    return (
        <nav className='creator-nav-container'>
            <ul className="tab-container" >
                <NavLink to='/upload' className="" activeClassName="clicked-tab">Upload</NavLink>
                <NavLink to='/you/tracks' activeClassName="clicked-tab">Your Tracks</NavLink>
                <NavLink to={`/${props.profile_url}/stats`} activeClassName="clicked-tab">Stats</NavLink>
            </ul>
        </nav>
      
    );
};