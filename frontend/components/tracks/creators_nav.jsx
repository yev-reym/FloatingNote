import React from 'react';
import {NavLink} from 'react-router-dom';

export default (props) => {
    return (
        <nav className='creator-nav-container'>
            <ul className="tab-container" >
                <NavLink  activeClassName="active-tab" to='/upload'>Upload</NavLink>
                <NavLink activeClassName="active-tab" to='/you/tracks' >Your Tracks</NavLink>
                <NavLink activeClassName="active-tab" to={`/${props.profile_url}/stats`} >Stats</NavLink>
            </ul>
        </nav>
      
    );
};