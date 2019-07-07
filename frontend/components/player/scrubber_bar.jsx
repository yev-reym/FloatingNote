import React from 'react';
import {receiveScrubberPercentage} from "../../actions/player_actions";
import {connect} from 'react-redux';

class ScrubberBar extends React.Component {
    constructor(props){
        super(props);
        this.state= {showScrubberThumb: false};
        this.scrubberBar = React.createRef();
        this.updateScrubberPercentage = this.updateScrubberPercentage.bind(this);
        this.toggleScrubberThumb = this.toggleScrubberThumb.bind(this);
    }

    componentDidUpdate(prevProps){
  
        if (prevProps.currentTime !== this.props.currentTime) {
            let newPercentage = (this.props.currentTime / this.props.duration) * 100;
            this.scrubberBar.current.value = `${newPercentage}`;
        }
    }

    updateScrubberPercentage(){
        const percentage = parseInt(this.scrubberBar.current.value);
        this.props.updatePercentage(percentage);
        this.setState({scrubberValue: percentage});
    }

    toggleScrubberThumb(){
        // this.setState({showScrubberThumb: !this.state.showScrubberThumb});
    }

    render(){

        return (
            <div className="scrubber-outer">
                <input ref={this.scrubberBar} type="range" defaultValue="0" min='0' max='100' step='.1' onChange={this.updateScrubberPercentage} 
                                                                                                        onMouseOver={this.toggleScrubberThumb} 
                                                                                                        onMouseLeave={this.toggleScrubberThumb} />
            </div>     
        );

    }
}

const mapStateToProps = (state) => {
    const {player} = state.ui
    return {
        percentage: player.percentage,
        duration: player.trackDuration,
        currentTime: player.currentTime
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePercentage: (newPercentage) => dispatch(receiveScrubberPercentage(newPercentage))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScrubberBar);
