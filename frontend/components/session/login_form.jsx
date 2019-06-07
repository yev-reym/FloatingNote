import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: this.props.info,
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePath = this.handlePath.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.handlePath);
    }

    handlePath(){
        this.props.closeModal();
        this.props.history.push('/discover');
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errorsSession.map((error, i) => (
                    <li className='errors' key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }
    
    

    render() {
        const errorStyle = this.props.errorsSession[0] ? 'errors-input' : null
        return (
            <form onSubmit={this.handleSubmit} className="modal-form">
           
                    <div className="login-form-container">
                       
              <button           
                                    form = ''
                                    onClick={(e)=>{
                                    e.preventDefault();
                                    this.props.closeModal()
                                    this.props.returnForm('checkInfo')
                                }}
                        className="input-box-login"
                    ><span>&#9668; </span> <span>{this.state.info} </span></button>
                    
              <input type="password"
                                autoFocus
                                value={this.state.password}
                                onChange={this.update('password')}
                                className={`input-box-login-pass ${errorStyle}`}
                                placeholder="Your Password *"
                            />
                    {this.renderErrors()}
                    
                    <input className="submit-button" type="submit" value="Sign in" />
                    </div>
                </form>
        );
    }
}

export default LoginForm;