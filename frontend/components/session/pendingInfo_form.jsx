import React from 'react';
import { connect } from 'react-redux';
import { login, logout, confirmInfo, clearErrors } from '../../actions/auth_actions';
import {closeModal, openModal} from '../../actions/modal_actions';
import LoginForm from './login_form';
import SignUpContainer from './signup_container';
import {withRouter, Link} from 'react-router-dom';


const mapStateToProps = (state) => {
    return {
        errorsSession: state.errors.session,
        errorsInfo: state.errors.pendingInfo,
        exists: state.ui.pendingInfo.exists 
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        returnForm: (name) => dispatch(openModal(name)),
        closeModal: () => dispatch(closeModal()),
        confirmInfo: (info) => dispatch(confirmInfo(info)),
        login: (user) => dispatch(login(user)),
        signup: (user) => dispatch(signup(user)),
        logout: () => dispatch(logout()),
        clearErrors: () => dispatch(clearErrors())
    };
};


class PendingInfoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { info: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.handleForm = this.handleForm.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.demo = false;
    }

    handleDemo(e){
        e.preventDefault();
        this.props.login({info:'user@demo.com', password:'password123'});
        this.props.history.push('/discover');
        this.props.closeModal();
    }

    update() {
        return (e) => {
            if (this.state.info === ''){
                this.props.clearErrors();
                this.setState({ info: e.currentTarget.value });
            } else {
                this.setState({ info: e.currentTarget.value });
            }
        };
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        this.props.clearErrors();
        this.props.exists === undefined ? this.props.confirmInfo(this.state.info) : this.handleForm()
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errorsInfo.map((error, i) => (
                    <li className='errors' key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    handleForm(){
        if (this.props.exists === true) {
            return <LoginForm clearErrors={this.props.clearErrors} errorsSession={this.props.errorsSession} info={this.state.info} history={this.props.history} login={this.props.login} closeModal={this.props.closeModal} processForm={this.props.processForm} returnForm={this.props.returnForm}/>;
        } else if (this.props.exists === false) {
            return <SignUpContainer  info={this.state.info} formStage={'password'} />;
        } else {
            const errorStyle = this.props.errorsInfo[0] ? 'errors-input' : null
            return (
                <form onSubmit={this.handleSubmit} className="modal-form">
                    <div className="info-form-container">
                    
                        <button id='demo' type='button'  className="button button-large modal-demo-login" onClick={this.handleDemo}> Continue with Demo Login</button>
                        <h2 className="divider"><span>or</span></h2>

                        <input type="text" className={`input-box ${errorStyle}`} onChange={this.update()} placeholder="Your email address of profile URL *" value={this.state.info} />
                        {this.renderErrors()}
                        <input className="submit-button" type="submit" value="Continue" />

                   

                        <section className="user-privacy">

                        <p  className='sign-in-text'>We may use your email and devices for updates and tips on SoundCloud's products and services,
                 and for activities notifications. You can unsubscribe for free at any time in your notification settings.</p>

                        <p className='sign-in-text'>We may use information you provide us in order to show you
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