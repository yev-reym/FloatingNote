import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.info;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formTypeHandler = this.formTypeHandler.bind(this);
        this.update = this.update.bind(this);
        this.handlePath = this.handlePath.bind(this);
    }

    update(field) {
     
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handlePath() {
        this.setState({ formStage: "display-name" });
        this.props.history.push('/discover');
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.formStage === 'password') {
          
           this.setState({formStage: "gender"});
        } else if (this.state.formStage === "gender") {
            const {age, gender, password, username, email} = this.state;
            const user = {age, gender, password, email, username};
            this.props.signup(user).then(this.handlePath);
        } else {
            debugger
            //update user username field
            this.props.closeModal();
        }
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

    formTypeHandler(){
    
        switch (this.state.formStage) {
            case 'password':
                return (
                    <>
                        <form onSubmit={this.handleSubmit} className="modal-form">
                            <div className="signup-form">
                            <h1 className='create-account'>Create your FloatingNote account</h1>
                            {/* {this.renderErrors()} */}
                

                                <button onClick={(e) => {
                                    e.preventDefault();

                                    this.props.closeModal()
                                    this.props.returnForm('checkInfo')
                                }}
                                    form=''
                                    className="input-box-login"
                                ><span>&#9668; </span> <span>{this.state.email} </span> </button>

                                <label className="required-field">
                                    <span>Choose a password</span> 
                                <input type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className="input-box-login-pass"
                                        placeholder="Your Password *"
                                    />
                                </label>

                                <p className='sign-in-text'>By signing up I accept the Terms of Use. I have read and understood the Privacy Policy and Cookies Policy.</p>

                                <input className="submit-button" type="submit" value="Accept & Continue" />
                                <div className='are-you-sure'>
                                    <h3>Are you trying to sign in?</h3> 
                                    <p>
                                    The email address that you entered was not found.
                                    Double-check your email address.
                                    </p> 
                                </div>
                              
                            </div>
                        </form> </>
                );
            case 'gender' :
                return (
        
                        <form onSubmit={this.handleSubmit} className="modal-form">
                        <div className="login-form-container gender-margin-top">
                            <h1 className='create-account'>Create your FloatingNote account</h1>
                            {/* {this.renderErrors()} */}

                                <label className="required-field">
                                    <span>Tell us your age</span> 
                        <input type="text"
                                        autoFocus
                                        form=''
                                        value={this.state.age}
                                        onChange={this.update('age')}
                                        className="input-box"
                                        id="age"
                                    />
                                </label>


                            <label className="required-field">
                                   <span>Gender</span>
                        <select className='input-box-login-pass gender-selector' onChange={this.update('gender')}>
                                    <option defaulValue="Indicate your gender">Indicate your gender</option>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                    <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                        </label>

                                <input className="submit-button" type="submit" value="Continue" />
                            </div>
                        </form>
                    )
            case 'display-name':
                debugger
                return (

                    <form onSubmit={this.handleSubmit} className="modal-form">
                        <h2>Tell us a bit about yourself</h2>
                        {/* {this.renderErrors()} */}
                        <div className="signup-form">

                            <label className="required-field">
                                Choose your display name
                        <input type="text"
                                    value={this.state.username}
                                    onChange={(e)=>this.setState({username: e.target.value})}
                                    className="input-box"
                                    id='display-name'
                                />
                            </label>

                            <p>Your display name can be anything you like. Your name or artist name are good choices.</p>

                            <input className="submit-button" type="submit" value="Get started" />
                        </div>
                    </form>
                )
        }
    }

    render() {
    
     return this.formTypeHandler();
    }
   
}

export default SignUpForm;