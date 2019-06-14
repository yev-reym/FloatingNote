import {connect} from 'react-redux';
import {fetchTrack, deleteTrack} from '../../utils/tracks_api_util';
import {openModal} from '../../actions/modal_actions';
import {withRouter} from 'react-router-dom';
import TrackShow from './track_show';



const mapStateToProps = ({entities, session}, ownProps) => {
    const track = entities.tracks[ownProps.match.params.trackId] || {}
    const user = entities.users[track.uploader_id]

    return {
        track,
        user,
        currentUser: session.currentUser 
    }
};  

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTrack: (track) => dispatch(fetchTrack(track)),
        openModal: (modal) => dispatch(openModal(modal)),
        deleteTrack: (track) => dispatch(deleteTrack(track)),
    }
};  

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TrackShow));