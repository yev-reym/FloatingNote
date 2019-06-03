import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import NavBar from './nav_bar';
import {logout} from '../../actions/auth_actions';
import {closeModal, openModal} from '../../actions/modal_actions';


const mapStateToProps = (state) => {
    const {session, entities} = state;
    return {
        currentUser: entities.users[session.id]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        closeModal: () => dispatch(closeModal()),
        openModal: (type) => dispatch(openModal(type))
    };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavBar));