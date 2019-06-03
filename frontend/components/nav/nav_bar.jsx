import React from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends React.Component {
    constructor(){
        super(props);
    }

    handleClickNoUser() {
        this.props.openModal('checkInfo');
    }

    toggleNavByUser(){
        if (this.props.currentUser) {
            <nav className="nav-bar">
                <NavLink className="nav-button nav-bar-logo" to='/'>
                    <figure className="cloud-logo">
                        <img src={window.nav_logo} className="cloud-logo-item" />
                    </figure>
                </NavLink>
                <a className='nav-button nav-home'>Home</a>
                <a className='nav-button nav-stream'>Stream</a>
                <a className='nav-button nav-stream'>Library</a>
                <form>
                    <input className='search-bar' type="text" placeholder="Search" />
                </form>
                <a>Upload</a>
                <a></a>
                <div className="drop-down">
                    <NavLink to="/logout">Sign out</NavLink>
                </div>
            </nav>
        } else {
            <nav className="nav-bar">
                <NavLink className="nav-button nav-bar-logo" to='/'>
                    <figure className="cloud-logo">
                        <img src={window.nav_logo} className="cloud-logo-item" />
                    </figure>
                </NavLink>
                <a className='nav-button nav-home'>Home</a>
                <a className='nav-button nav-stream'>Stream</a>
                <a className='nav-button nav-stream'>Library</a>
                <form>
                    <input className='search-bar' type="text" placeholder="Search for artist, bands, tracks, podcasts" />
                </form>
                <div>
                    <button id='signin' className="buttons signin" onClick={this.handleClickNoUser}>Sign in</button>

                    <button className="buttons signup" onClick={this.handleClickNoUser}>Create account</button>
                </div>
                <a></a>
                <div className="drop-down">
                    <NavLink to="/logout">Sign out</NavLink>
                </div>
            </nav>
        }
    }


    render(){
        return (
            <div>NavBar</div>
        );
    }
}



export default NavBar;