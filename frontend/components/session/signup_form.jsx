import React from 'react';

class SignUpForm extends React.Component {
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
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">

                    {this.renderErrors()}
                    <div className="login-form">
                        <br />

                        <input type="text"
                            value={this.state.info}
                            onClick={() => {
                                this.props.closeModal()
                                this.props.returnForm()
                            }}
                            className="login-input"
                        />
                        <br />

                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                            placeholder="Your Password *"
                        />

                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;