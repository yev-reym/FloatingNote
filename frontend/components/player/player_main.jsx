import React from 'react';
import LeftPlayer from './player_left';
import {connect} from 'react-redux';
import {fetchCurrentTrack, play, pause, updateTrackTime, receivePlayerInfo} from '../../actions/player_actions';



class MainPlayer extends React.Component {
    constructor(props){
        super(props);
        const {currentTrack} = props;
        this.state = {currentTrack, trackDuration: null};
        this.playMusic = this.playMusic.bind(this);
        this.pauseMusic = this.pauseMusic.bind(this);
        this.formatTime = this.formatTime.bind(this);
    

        this.Scrubber = React.createRef();
        this.volumeTracker = React.createRef();
    }

    playMusic(){
        this.props.play();
    }

    pauseMusic(){
        this.props.pause();
    }

    formatTime(durationSec){
        const duration = durationSec;
        const hr = Math.floor(duration / 3600);
        const min = Math.floor((duration % 3600) / 60);
        const sec = Math.floor(duration) % 60;

        const h = hr < 1 ? "" : hr + ':';
        const s = sec < 10 ? '0' + sec : sec;
        const m = min < 10 && hr > 1 ? '0' + min : min;
      
        return `${h}${m}:${s}`;
    }

    componentDidMount(){
        this.Scrubber.current.onloadedmetadata = () => {
            this.Scrubber.current.play().then(() => {
                this.props.receivePlayerInfo(this.formatTime(this.Scrubber.current.duration));
                this.setState({trackDuration: this.props.duration});
                this.playMusic();
            });
            
        };
       
    }

    componentDidUpdate(){
        this.props.playing ? this.Scrubber.current.play() : this.Scrubber.current.pause();
    }

    render(){

        return (
            <footer className="player-container">
                <main className="player-positioner">
                    <LeftPlayer Scrubber={this.Scrubber} playing={this.props.playing} play={this.props.play} pause={this.props.pause}/>

                <section className='scrubber-container'>
                   <audio ref={this.Scrubber} src={this.props.currentTrack.trackUrl} preload="auto"  ></audio> 
                    <input type="range"  defaultValue="0" min='0'max='100' step='1'  />
                    <div className='track-duration'>
                        {this.props.duration}
                    </div> 
                </section>
  
                </main>       
            </footer>
           
        )
    }
}

const mapStateToProps = ({ui}) => {
    return {
        currentTrack: ui.player.currentTrack,
        playing: ui.player.playing,
        duration: ui.player.trackDuration || null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        receivePlayerInfo: (info) => dispatch(receivePlayerInfo(info)),
        play: () => dispatch(play()),
        pause: () => dispatch(pause())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPlayer);