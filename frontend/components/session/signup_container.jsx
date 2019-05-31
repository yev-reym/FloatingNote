import { connect } from 'react-redux';
import { login, logout, confirmInfo, signup} from '../../actions/auth_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import SignUpForm from './signup_form';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
    const {info,formStage} = ownProps;
    return {
        errorsSession: state.errors.session,
        errorsInfo: state.errors.pendingInfo,
        exists: state.ui.pendingInfo.exists,
        info: { age: '', gender: '', password: '', email: info, formStage},
    };
};

const mapDispatchToProps = dispatch => {
    return {
        returnForm: (type) => dispatch(openModal(type)),
        closeModal: () => dispatch(closeModal()),
        confirmInfo: (info) => dispatch(confirmInfo(info)),
        login: (user) => dispatch(login(user)),
        signup: (user) => dispatch(signup(user)),
        logout: () => dispatch(logout())
    };
};


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SignUpForm));