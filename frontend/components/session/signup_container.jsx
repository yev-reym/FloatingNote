import { connect } from 'react-redux';
import { logout,signup, updateUsername} from '../../actions/auth_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import SignUpForm from './signup_form';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
    const {info,formStage} = ownProps;
    return {
        exists: state.ui.pendingInfo.exists,
        info: { age: '', gender: '', password: '', email: info, username: '',
        errorsPassword: [], errorsAge: [], errorsGender: [], errorsUsername: [], formStage}
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        signup: (user) => dispatch(signup(user)),
        logout: () => dispatch(logout()),
        updateUsername: (user) => dispatch(updateUsername(user)),
        openModal: (modal) => dispatch(openModal(modal))
    };
};


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SignUpForm));