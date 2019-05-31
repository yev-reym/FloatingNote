import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: this.props.info,
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="modal-form">
           
                    {this.renderErrors()}
                    <div className="login-form">
                       
              <input type="text"
                                value={this.state.info}
                                onClick={()=>{
                                    this.props.closeModal()
                                    this.props.returnForm()
                                }}
                                className="input-box"
                            />
                    
              <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="input-box"
                                placeholder="Your Password *"
                            />
                    
                    <input className="submit-button" type="submit" value="Sign in" />
                    </div>
                </form>
        );
    }
}

export default LoginForm;