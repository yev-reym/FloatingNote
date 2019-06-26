import React from 'react';
import {NavLink} from 'react-router-dom';


class TrackItem extends React.Component {
    constructor(props){
        super(props);
        this.track = this.props.track;
        this.uploader = this.props.uploader;
        this.state = { playButtonHover: false};
        this.togglePlayButton = this.togglePlayButton.bind(this);
        this.redirectShowPage = this.redirectShowPage.bind(this);
    }

    togglePlayButton(){
        this.setState({playButtonHover: !this.state.playButtonHover});
    }

    redirectShowPage(){
        
        this.props.history.push(`/${this.uploader.username}/${this.track.id}`);
    }


    render(){
        
        return (

        <div className='track-item' >

            <img className='track-item-image' src={`${this.track.photoUrl}`} onClick={this.redirectShowPage} onMouseEnter={this.togglePlayButton} onMouseLeave={this.togglePlayButton}/>

            <NavLink className='track-item-title' to={`/${this.uploader.username}/${this.track.id}`}>
                {this.track.title}
            </NavLink>
            <NavLink className="track-item-uploader">
                {this.uploader.username}
            </NavLink>

        </div>

        )
        
    }
}

export default TrackItem;