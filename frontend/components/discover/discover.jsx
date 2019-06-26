import React from 'react';
import {TrackIndex} from '../tracks/tracks_index';



class Discover extends React.Component {
    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        this.props.fetchTracks(); //.then(tracks => this.setState({tracks: tracks}));
    }

    render() {
        const tracks = Object.keys(this.props.tracks).length === 0 ? null : Object.values(this.props.tracks);
        const trackIndex = tracks ? <TrackIndex tracks={tracks} uploaders={this.props.uploaders} /> : null
       
        return (
            <main className='page-container'>
                <h1 className="logout-heading"> Check out FloatingNote's latest tracks!</h1>
                 {trackIndex}
            </main>
        )
    }
    

};


export default Discover;
