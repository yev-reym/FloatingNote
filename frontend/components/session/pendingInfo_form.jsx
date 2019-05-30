import React from 'react';
import { connect } from 'react-router-dom';
import SessionForm from './session_form';
import { login, logout, checkInfo } from '../../actions/auth_actions';
import { Link } from 'react-router-dom';


const mapDispatchToProps = (dispatch) => {
    return {
        checkInfo: (info) => dispatch(checkInfo(info)),
        login: (user) => dispatch(login(user)),
        signup: (user) => dispatch(signup(user))
    };
};

class PendingInfoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { info: '' }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update() {
        return (e) => (this.setState({ info: e.target.value }))
    }

    handleSubmit() {
        if (this.props.checkInfo(this.state.info).exists === true) {
            <SessionForm info={this.state.info} login={this.props.login} />
        } else if (this.props.checkInfo(this.state.info).exists === false) {
            < SessionForm info={this.state.info} signup={this.props.signup} />
        }
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.update()} placeholder="Your email address of profile URL *" />
                <input type="submit" value="Continue" />

                <p>We may use your email and devices for updates and tips on SoundCloud's products and services,
                 and for activities notifications. You can unsubscribe for free at any time in your notification settings.</p>

                <p>We may use information you provide us in order to show you
                    targeted ads as described in our <link>Privacy Policy</link>.</p>
            </form>
        );
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(PendingInfoForm);