import React from 'react';
import { connect } from 'react-redux';
import { login, logout, confirmInfo } from '../../actions/auth_actions';
import LoginFormContainer from './login_form_container';
import SignUpFormContainer from './signup_form_container';

const mapStateToProps = ({ui}) => {
    return {
        exists: ui.pendingInfo.exists 
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        confirmInfo: (info) => dispatch(confirmInfo(info)),
        login: (user) => dispatch(login(user)),
        signup: (user) => dispatch(signup(user))
    };
};

class PendingInfoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { info: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.handleForm = this.handleForm.bind(this);
    }

    update() {
        return (e) => (this.setState({ info: e.target.value }));
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.confirmInfo(this.state.info).then(this.handleForm());
    }

    handleForm(){
        if (this.props.exists === true) {
            return <LoginFormContainer info={this.state.info} login={this.props.login} />;
        } else if (this.props.exists === false) {
            return < SignUpFormContainer info={this.state.info} signup={this.props.signup} />;
        } else {
            return (

                <>
                    <form onSubmit={this.handleSubmit} className="info-check-form">

                        <input type="text" className="email-input" onChange={this.update()} placeholder="Your email address of profile URL *" />
                        <input type="submit" value="Continue" />

                    </form>

                    <section className="user-privacy">

                        <p>We may use your email and devices for updates and tips on SoundCloud's products and services,
                 and for activities notifications. You can unsubscribe for free at any time in your notification settings.</p>

                        <p>We may use information you provide us in order to show you
                    targeted ads as described in our Privacy Policy.</p>

                    </section>
                </>
            );
        }
    }

    render() {

        return this.handleForm()
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(PendingInfoForm);