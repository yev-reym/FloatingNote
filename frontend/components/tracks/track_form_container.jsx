import {connect} from 'react-redux';
import {uploadTrack} from '../../actions/track_actions';
import TrackForm from './track_form';
import {openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = ({session}) => {
    return {
        currentUser: session.currentUser,
        track: {title:'', genre:'', private: false, tags: '', track_file: null, errorsTitle: [] }
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        upload: (data) => dispatch(uploadTrack(data)),
        openModal: (type) => dispatch(openModal(type)),
        closeModal: () => dispatch(closeModal())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(TrackForm);