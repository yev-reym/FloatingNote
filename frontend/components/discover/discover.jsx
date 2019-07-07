import React from 'react';
import {TrackIndex} from '../tracks/index/tracks_index';


class Discover extends React.Component {
    constructor(props){
        super(props);
        this.state = {tracks:[], uploaders:[]};
    }

    componentDidMount(){
        this.props.fetchTracks().then(() => {
            this.setState({tracks: Object.values(this.props.tracks), uploaders: this.props.uploaders});
        });
    }

    render() {
        const trackIndex = this.state.tracks.length === 0 ? null : <TrackIndex tracks={this.state.tracks}  uploaders={this.state.uploaders}  history={this.props.history} />;
       
        return (
            <main className='page-container'>
 
                    <section className="left-container">

                    <div className="track-index-info">
                        <h2> Check out FloatingNote's freshest tracks!</h2>
                        <p>The latest hits, updated all the time</p> 
                    </div>
                    {trackIndex}

                    <div className="track-index-info">
                        <h2>Feel good tracks</h2>
                        <p>For those days when you need a lift</p>
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
         
                
            </main>
        )
    }
    

}

export default Discover;
