import React from 'react';
import {fetchCurrentTrack, play, pause} from '../../actions/player_actions';
import {connect} from 'react-redux';

class PlayButton extends React.Component {
    constructor(props){
        super(props);
        const {trackId} = props;
        this.trackId = trackId;
        this.buttonStyle = props.location === '/discover' ? 'play-button' : 'play-button-show';
        this.togglePlay = this.togglePlay.bind(this);
    }

    togglePlay(){

        if (this.props.currentTrack.id === this.trackId) {
            if (this.props.playing){
                this.props.pause();
            } else {
                this.props.play();
            }
        } else {
            this.props.fetchCurrentTrack(this.trackId);
        }
         
    }


    render(){
        const pauseSrc = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE4cHgiIGhlaWdodD0iMjdweCIgdmlld0JveD0iMCAwIDE4IDI3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy4yLjIgKDk5ODMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPlBhdXNlIDYwPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+CiAgICAgICAgPGcgaWQ9ImJ1dHRvbnMiIHNrZXRjaDp0eXBlPSJNU0FydGJvYXJkR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzQxLjAwMDAwMCwgLTgxOC4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHBhdGggZD0iTTE3NTIsODE4IEwxNzUyLDg0NSBMMTc1OSw4NDUgTDE3NTksODE4IEwxNzUyLDgxOCBaIE0xNzQxLDgxOCBMMTc0MSw4NDUgTDE3NDgsODQ1IEwxNzQ4LDgxOCBMMTc0MSw4MTggWiIgaWQ9IlBhdXNlLTYwIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
        const playSrc = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE4cHgiIGhlaWdodD0iMjlweCIgdmlld0JveD0iMCAwIDE4IDI5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy4yLjIgKDk5ODMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPlBsYXkgNjA8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iYnV0dG9ucyIgc2tldGNoOnR5cGU9Ik1TQXJ0Ym9hcmRHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2NjUuMDAwMDAwLCAtODE4LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTY2NSw4NDcgTDE2NjkuMTUzODUsODMyLjUgTDE2NjUsODE4IEwxNjgzLDgzMi41IEwxNjY1LDg0NyBaIiBpZD0iUGxheS02MCIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+";
        const source = this.props.playing && this.props.currentTrack.id === this.trackId ? pauseSrc : playSrc; 
        const playingStyle = this.props.playing && this.props.currentTrack.id === this.trackId ? "in-play" : null;
        const buttonStatus = this.props.playing && this.props.currentTrack.id === this.trackId ? "button-show" : this.props.buttonStatus;
        
        return (
            <div className={`${this.buttonStyle} ${playingStyle} ${buttonStatus} `} onClick={this.togglePlay}>
                <img src={source} className='play-logo'/>
            </div>
        )
        
    }
}

const mapStateToProps = ({ui}, ownProps) => {
    return {
        trackId: ownProps.trackId,
        location: ownProps.location,
        currentTrack: ui.player.currentTrack || {},
        playing: ui.player.playing,
        buttonStatus: ownProps.buttonStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCurrentTrack: (id) => dispatch(fetchCurrentTrack(id)),
        play: () => dispatch(play()),
        pause: () => dispatch(pause()) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayButton);