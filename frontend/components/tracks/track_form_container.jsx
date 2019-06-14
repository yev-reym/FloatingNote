import {connect} from 'react-redux';
import {uploadTrack} from '../../actions/track_actions';
import TrackForm from './track_form';
import {openModal, closeModal} from '../../actions/modal_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = ({session}) => {
    return {
        currentUser: session.currentUser,
        track: {title:'', genre:'', private: false, tags: '', trackFile: null,
         errorsTitle: [], description:'', photoFile: window.defImg,
         errorsPhoto: [], errorsAudio: []
         }
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        upload: (data) => dispatch(uploadTrack(data)),
        openModal: (type) => dispatch(openModal(type)),
        closeModal: () => dispatch(closeModal())
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrackForm));