import React from 'react';
import LeftPlayer from './player_left';
import RightPlayer from './player_right';
import ScrubberBar from './scrubber_bar';
import {connect} from 'react-redux';
import {fetchCurrentTrack, play, pause, updateTrackTime, receivePlayerInfo, clearScrubberPercentage, receiveScrubberPercentage} from '../../actions/player_actions';



class MainPlayer extends React.Component {
    constructor(props){
        super(props);
        this.state = {currentTrack: props.currentTrack, trackDuration: null, percentage: props.percentage, currentTime: "0:00"};
        this.playMusic = this.playMusic.bind(this);
        this.pauseMusic = this.pauseMusic.bind(this);
        this.formatTime = this.formatTime.bind(this);
    

        this.Scrubber = React.createRef();
        this.volumeTracker = React.createRef();

        this.updateTrackTime = this.updateTrackTime.bind(this);
    }

    playMusic(){
        this.props.play();
    }

    pauseMusic(){
        this.props.pause();
    }

    formatTime(unformatTime){
        const time = unformatTime;
        const hr = Math.floor(time / 3600);
        const min = Math.floor((time % 3600) / 60);
        const sec = Math.floor(time) % 60;

        const h = hr < 1 ? "" : hr + ':';
        const s = sec < 10 ? '0' + sec : sec;
        const m = min < 10 && hr > 1 ? '0' + min : min;
      
        return `${h}${m}:${s}`;
    }

    componentDidMount(){
        this.Scrubber.current.onloadedmetadata = () => {
            this.Scrubber.current.play().then(() => {
                this.props.receivePlayerInfo(this.Scrubber.current.duration);
                this.setState({trackDuration: this.formatTime(this.Scrubber.current.duration)});
                this.playMusic();
            });
            
        };
       
    }

    componentDidUpdate(){
        
        if (this.props.percentage) {
            this.updateTrackTime(this.props.percentage);
        } else {
            this.Scrubber.current.ontimeupdate = () => {
                this.props.updateTime(this.Scrubber.current.currentTime);
                this.setState({currentTime: this.formatTime(this.props.currentTime) });

                let newPercentage = this.props.currentTime / this.props.duration;
            };
        }
       
        this.props.playing ? this.Scrubber.current.play() : this.Scrubber.current.pause();
    }

    updateTrackTime(scrubberPercentage){
        debugger
        const newTrackTime = this.props.duration * (scrubberPercentage * 0.01);
        this.Scrubber.current.currentTime = newTrackTime;
        this.props.clearScrubberPercentage();
        this.props.updateTime(newTrackTime);
    }

    render(){

        return (
            <footer className="player-container">
                <main className="player-positioner">

                    <LeftPlayer Scrubber={this.Scrubber} playing={this.props.playing} play={this.props.play} pause={this.props.pause}/>

                <section className='scrubber-container'>
                   <audio ref={this.Scrubber} src={this.props.currentTrack.trackUrl} preload="auto"  ></audio> 
                   <div className="track-current-time">
                       {this.state.currentTime}
                   </div>     
                    <ScrubberBar />
                    <div className='track-duration'>
                        {this.state.trackDuration}
                    </div> 
                </section>

                    <RightPlayer uploader={this.props.uploader} currentTrack={this.props.currentTrack}  />
  
                </main>       
            </footer>
           
        )
    }
}

const mapStateToProps = ({ui}) => {
    const {currentTrack, playing, uploader, percentage, currentTime} = ui.player;
    return {
        currentTrack,
        playing,
        duration: ui.player.trackDuration || null,
        uploader,
        percentage,
        currentTime
    }
}

const mapDispatchToProps = dispatch => {
    return {
        receivePlayerInfo: (info) => dispatch(receivePlayerInfo(info)),
        play: () => dispatch(play()),
        pause: () => dispatch(pause()),
        updateTime: (newTime) => dispatch(updateTrackTime(newTime)),
        clearScrubberPercentage: () => dispatch(clearScrubberPercentage()),
        updatePercentage: (newPercentage) => dispatch(receiveScrubberPercentage(newPercentage))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPlayer);