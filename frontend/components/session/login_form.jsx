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

    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="modal-form">
           
                    {/* {this.renderErrors()} */}
                    <div className="login-form">
                       
              <button           onClick={(e)=>{
                                    e.preventDefault();
                                    this.props.closeModal()
                                    this.props.returnForm()
                                }}
                        className="input-box post-info-check"
                            ><span>&#9668;  {this.state.info} </span> </button>
                    
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