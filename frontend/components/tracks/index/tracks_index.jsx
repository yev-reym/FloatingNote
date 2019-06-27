import React from 'react';
import TrackItem from './track_item';


export class TrackIndex extends React.Component{
    constructor(props){
        super(props);
        const {tracks, uploaders, history} = props;
        this.tracks = tracks;
        this.uploaders = uploaders;
        this.history = history;

        this.state = { slideIndex: null, onRightSide: true, isHovered: false};
        this.handleClick = this.handleClick.bind(this);
        this.handleHover = this.handleHover.bind(this);
    }

    handleClick() {
        this.setState({ onRightSide: !this.state.onRightSide });

        this.state.slideIndex === null ? this.setState({slideIndex: true}) : this.setState({slideIndex: !this.state.slideIndex })
    }

    handleHover() {
        this.setState({ isHovered: !this.state.isHovered});
    }


    render(){
    const mappedTracks = this.tracks.map((track ) => {

      return ( 
          <li key={track.id}>
            <TrackItem
            track={track}
            uploader={this.uploaders[track.uploader_id]}
            history={this.history}
            /> 
        </li>
        );
       
    });
    
    const slide = this.state.slideIndex === null ? null : this.state.slideIndex ? "slide-left" : "slide-right";
    const shake = this.state.isHovered ? "shake" : null; 
    const clickStatus = this.state.onRightSide ? null : 'left-side-slider';
    const hoverStatus = this.state.isHovered ? 'slider-hovered' : null;


    return (
        <>
        <ul className={`slider-container ${slide} ${shake}`}>
            {mappedTracks}       
        </ul>
        <div className='button-positioning-div'>
            <div className={`slider-button ${clickStatus} ${hoverStatus}`}
                onClick={this.handleClick}
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHover}
            ><span>&#8250;</span></div>
        </div>
         
         </>
        );
    }


};