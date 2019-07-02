import React from 'react';
import LeftPlayer from './player_left';
import {connect} from 'react-redux';
import {fetchCurrentTrack, play, pause, updateTrackTime, receivePlayerInfo} from '../../actions/player_actions';



class MainPlayer extends React.Component {
    constructor(props){
        super(props);
        const {currentTrack} = props;
        this.state = {currentTrack};
        this.playMusic = this.playMusic.bind(this);
        this.pauseMusic = this.pauseMusicbind(this);
    

        this.Scrubber = React.createRef();
        this.volumeTracker = React.createRef();
    }

    playMusic(){
        this.props.play();
    }

    pauseMusic(){
        this.props.pause();
    }

    componentDidMount(){
        this.Scrubber.current.onloadedmetadata = () => {
            this.Scrubber.current.play();
            this.playMusic();
        };
       
    }

    componentDidUpdate(){
        if (this.props.playing)
    }

    render(){

        return (
            <footer className="player-container">
                <main className="player-positioner">
                    <LeftPlayer Scrubber={this.Scrubber} playing={this.props.playing} play={this.props.play} pause={this.props.pause}/>

                    <audio ref={this.Scrubber} src={this.state.currentTrack.trackUrl} preload="auto" >

                    </audio> 
                </main>       
            </footer>
           
        )
    }
}

const mapStateToProps = ({ui}) => {
    return {
        currentTrack: ui.player.currentTrack,
        playing: ui.player.playing
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