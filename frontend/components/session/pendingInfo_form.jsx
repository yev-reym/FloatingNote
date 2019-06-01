import React from 'react';
import { connect } from 'react-redux';
import { login, logout, confirmInfo } from '../../actions/auth_actions';
import {closeModal, openModal} from '../../actions/modal_actions';
import LoginForm from './login_form';
import SignUpContainer from './signup_container';
import {withRouter} from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
    return {
        errorsSession: state.errors.session,
        errorsInfo: state.errors.pendingInfo,
        exists: state.ui.pendingInfo.exists 
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        returnForm: () => dispatch(openModal('checkInfo')),
        closeModal: () => dispatch(closeModal()),
        confirmInfo: (info) => dispatch(confirmInfo(info)),
        login: (user) => dispatch(login(user)),
        signup: (user) => dispatch(signup(user)),
        logout: () => dispatch(logout())
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

        this.props.exists === undefined ? this.props.confirmInfo(this.state.info) : this.handleForm()
    }

    handleForm(){
        if (this.props.exists === true) {
            return <LoginForm info={this.state.info} history={this.props.history} login={this.props.login} closeModal={this.props.closeModal} processForm={this.props.processForm} returnForm={this.props.returnForm}/>;
        } else if (this.props.exists === false) {
            return <SignUpContainer  info={this.state.info} formStage={'password'} />;
        } else {
            return (
                <form onSubmit={this.handleSubmit} className="modal-form">
                    <div className="pending-info-form-container">
                    
                        <button className="modal-demo-login"> Continue with Demo Login</button>
                        <h3><span>or</span></h3>

                        <input type="text" className="input-box" onChange={this.update()} placeholder="Your email address of profile URL *" />
                        <input className="submit-button" type="submit" value="Continue" />

                   

                        <section className="user-privacy">

                        <p>We may use your email and devices for updates and tips on SoundCloud's products and services,
                 and for activities notifications. You can unsubscribe for free at any time in your notification settings.</p>

                        <p>We may use information you provide us in order to show you
                    targeted ads as described in our Privacy Policy.</p>

                        </section>
                    </div>
                 </form>
            );
        }
    }

    render() {

        return this.handleForm()
    }


}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PendingInfoForm));