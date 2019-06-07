import React from 'react';
import {NavLink} from 'react-router-dom';
class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = { searchFocused: false, droppedDown: false};
        this.toggleNavByUser = this.toggleNavByUser.bind(this);
        this.handleClickNoUser = this.handleClickNoUser.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._onBlur = this._onBlur.bind(this);
        this.handleDropDown = this.handleDropDown.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleClickNoUser(e) {
        e.preventDefault();
        this.props.openModal('checkInfo');
    }

    handleLogout(e){
        e.preventDefault();
        this.setState({droppedDown: false});
        this.props.logout();
    }

    handleDropDown(){
        this.setState({droppedDown: !this.state.droppedDown});
    }

    handleSearchBar(){
        this.setState({searchClicked: !this.state.searchClicked});
    }

    _onFocus() {
        if (!this.state.searchFocused) {
            this.setState({
                searchFocused: true,
            });
        } 
    }

    _onBlur() {
        if (this.state.searchFocused) {
            this.setState({
                searchFocused: false,
            });
        }
    }

    toggleNavByUser(){
        if (this.props.currentUser) {
            const styleSearch = this.state.searchFocused ? "clicked-search" : null;
           return(
        <header className="nav-bar-container">
            <nav className="nav-bar">
                <NavLink className="nav-button cloud-nav logo-signed-in" to='/discover'>
                    <figure className="signed-in-cloud" >
                               <img src={window.logo} className="cloud-logo-item nav-logo-item logo-item-signed-in" />
                    </figure>
                </NavLink>
                <NavLink className='nav-button nav-home' to='/discover'>Home</NavLink>
                <a className='nav-button nav-stream'>Stream</a>
                <a className='nav-button nav-stream'>Library</a>
                <form className='nav-search-container'>
                    <input className={`search-bar ${styleSearch}`} onFocus={this._onFocus} onBlur={this._onBlur} type="text" placeholder="Search" />
                    <img src={window.glass} className="nav-logo-item glass-icon-item" />
                </form>
                <NavLink activeClassName='clicked' className='upload' to='/upload'>Upload</NavLink>
                       <a className='nav-button profile control-overflow'><span>{this.props.currentUser.username}</span></a>
                {/* <div className="drop-down-notification">
                    <img onClick={this.handleDropDown} src={window.notifications} className={`bell-icon ${this.state.droppedDown ? 'open' : null}`} />
                </div> */}
                <div className="drop-down">
                    <img onClick={this.handleDropDown} src={window.options} className={`options-icon ${this.state.droppedDown ? 'open' : null}`} />
                    <NavLink to="/logout" onClick={this.handleLogout} className={`${this.state.droppedDown ? 'show' : 'hidden'}`}>Sign out</NavLink>
                </div>
            </nav>

        </header>
         
            ); 
        } else {
            const styleSearch = this.state.searchFocused ? "clicked-search" : null;
            return (
        <header className="nav-bar-container">
            <nav className="nav-bar">
                <NavLink className="nav-button cloud-nav" to='/discover'>
                    <figure className="cloud-logo nav-logo-after">
                            <img src={window.logo} className="cloud-logo-item nav-logo-item" />
                    </figure>
                </NavLink>
                <NavLink className='nav-button nav-home' to='/discover'>Home</NavLink>
                <a className='nav-button nav-stream'>Stream</a>
                <a className='nav-button nav-stream'>Library</a>
                <form className='nav-search-container'>
                    <input className={`search-bar ${styleSearch}`} type="text" onFocus={this._onFocus} onBlur={this._onBlur} placeholder="Search for artist, bands, tracks, podcasts" />
                    <img src={window.glass} className="nav-logo-item glass-icon-item" />
                </form>
                <div className="nav-button-container">
                    <button id='signin' className="buttons signin" onClick={this.handleClickNoUser}>Sign in</button>

                    <button id='signup' className="buttons signup create-button" onClick={this.handleClickNoUser}>Create account</button>
                </div>
                <a className='upload' >Upload</a>
            </nav>
         </header >
            );
        }
    }


    render(){
       return this.toggleNavByUser();
    }
}



export default NavBar;