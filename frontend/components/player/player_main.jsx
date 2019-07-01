import React from 'react';
import LeftPlayer from './player_left';


class MainPlayer extends React.Component {
    constructor(props){
        super(props);

    }

    render(){

        return (
            <footer className="player-container">
                <main className="player-positioner">
                    <LeftPlayer />

                    <audio src="">

                    </audio> 
                </main>       
            </footer>
           
        )
    }
}

export default MainPlayer;