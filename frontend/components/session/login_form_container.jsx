import { connect } from 'react-redux';
import { login } from '../../actions/auth_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import LoginForm from './login_form';

const mapStateToProps = ({ errors },ownProps) => {
    return {
        errors: errors.session,
        formType: 'Sign in',
        info: ownProps.info
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        returnForm: () => dispatch(openModal('info')),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);