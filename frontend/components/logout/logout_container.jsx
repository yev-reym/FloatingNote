import { connect } from 'react-redux'
import Logout from './logout';
import {logout} from '../../actions/auth_actions'

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id] || null,
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Logout);