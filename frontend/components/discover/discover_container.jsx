import { connect } from 'react-redux';
import Discover from './discover';
import {withRouter} from 'react-router-dom';
import {fetchTracks} from '../../actions/track_actions';

const mapStateToProps = ({entities}) => {

        return{
            tracks: entities.tracks,
            uploaders: entities.users
        };
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchTracks: () => dispatch(fetchTracks())

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Discover));















