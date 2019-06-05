import {connect} from 'react-redux';
import {uploadTrack} from '../../actions/track_actions';
import TrackForm from './track_form';

const mapStateToProps = ({session}) => {
    return {
        currentUser: session.currentUser,
        track: {title:'', genre:'', private: false, tags: '', uploader_id: session.currentUser.id, track_file: null}
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        upload: (data) => dispatch(uploadTrack(data))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(TrackForm);