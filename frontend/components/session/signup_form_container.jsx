import { connect } from 'react-redux';
import { signup } from '../../actions/auth_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SignUpForm from './signup_form';

const mapStateToProps = ({ errors }, ownProps) => {
    return {
        errors: errors.session,
        formType: 'Accept & Continue',
        info: ownProps.info
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        returnForm: () => dispatch(openModal('info')),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);