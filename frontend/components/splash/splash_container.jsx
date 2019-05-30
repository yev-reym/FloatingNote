import { connect } from 'react-redux';
import Splash from './splash';
import {openModal} from '../../actions/modal_actions';
import { logout} from '../../actions/auth_actions';



const mapStateToProps = (state,ownProps) => {
        const {session} = state;
        return {
            currentUser: session.currentUser
        };
};

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        logout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Splash);
