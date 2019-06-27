import React from 'react';
import {TrackIndex} from '../tracks/index/tracks_index';


class Discover extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchTracks(); //.then(tracks => this.setState({tracks: tracks}));
    }

    render() {
        const tracks = Object.keys(this.props.tracks).length === 0 ? null : Object.values(this.props.tracks);
        const trackIndex = tracks ? <TrackIndex tracks={tracks} uploaders={this.props.uploaders} history={this.props.history} /> : null
       
        return (
            <main className='page-container'>
                {/* <div className="fixer"> */}
                    <section className="left-container">

                    <div className="track-index-info">
                        <h2> Check out FloatingNote's freshest tracks!</h2>
                        <p>The latest hits, updated all the time</p> 
                    </div>
                    {trackIndex}

                    <div className="track-index-info">
                       <h2> Hits of the week</h2>
                        <p>See what's hot on the charts right now!</p> 
                    </div>
                    {trackIndex}

                    <div className="track-index-info">
                        <h2> Smooth & funky jazz</h2>
                        <p>With the goal of soothing the soul</p>  
                    </div>
                    {trackIndex}

                    <div className="track-index-info">
                        <h2> Fast drums and Heavy bass</h2>
                        <p>Dirty DnB and Dubstep beats to jam to</p>  
                    </div>
                    {trackIndex}

                    </section>
                {/* </div> */}
         
                
            </main>
        )
    }
    

};


export default Discover;
