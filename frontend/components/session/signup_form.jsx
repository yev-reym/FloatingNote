import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.info;
        this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);
        this.formTypeHandler = this.formTypeHandler.bind(this);
        this.update = this.update.bind(this);
        this.handlePath = this.handlePath.bind(this);
        this.handleAgeSubmit = this.handleAgeSubmit.bind(this);
        this.handleUsernameSubmit = this.handleUsernameSubmit.bind(this);
        this.renderErrorsPassword = this.renderErrorsPassword.bind(this);
        this.renderErrorsAge = this.renderErrorsAge.bind(this);
        this.renderErrorsGender = this.renderErrorsGender.bind(this);
        this.renderErrorsUsername = this.renderErrorsUsername.bind(this);
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

    handleAgeSubmit(e){
        e.preventDefault();
        if (this.state.age.length === 0 && (this.state.gender.length === 0 || this.state.gender === 'Indicate your gender')) {
            this.setState({ errorsAge: ['Enter your age.'], errorsGender: ['Please indicate your gender.'] });
        } else if (this.state.age.length === 0) {
            this.setState({ errorsAge: ['Enter your age.'], errorsGender:[] });
        } else if (this.state.age[0] < 1 && this.state.gender.length === 0) {
            this.setState({ errorsAge: ["You do not meet FloatingNote's minimum age requirement."], errorsGender: ['Please indicate your gender.'] });
        } else if (this.state.age[0] < 1) {
            this.setState({ errorsAge: ["You do not meet FloatingNote's minimum age requirement."], errorsGender:[] });
        } else if (this.state.gender.length === 0 || this.state.gender === 'Indicate your gender') {
            this.setState({ errorsAge: [], errorsGender: ['Please indicate your gender.'] });
        } else {
            const { age, gender, password, email } = this.state;
            const user = { age, gender, password, email};
            this.props.signup(user).then(this.handlePath);
        }
    }

    handleUsernameSubmit(e){
        e.preventDefault();
        if (this.state.username.length === 0){
            this.setState({ errorsUsername:['Enter your display name. You can change it later.'] });
        } else {
            const { age, gender, password, email, username } = this.state;
            const user = { age, gender, password, email, username };
            this.props.updateUsername(user).then(() => this.props.closeModal());
        }
    }

    handlePasswordSubmit(e) {
        e.preventDefault();
        if (this.state.password.length === 0){
            this.setState({errorsPassword:['Enter a password.']});
        } else if (this.state.password.length < 6) {
            this.setState({ errorsPassword: ['Use at least 6 characters.'] });
        } else {
            this.setState({ errorsPassword: [], formStage: "gender" });
        }
    }



     renderErrorsPassword() {
        return (
            <ul>
                {this.state.errorsPassword.map((error, i) => (
                    <li className='errors' key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    } 

    renderErrorsAge() {
        return (
            <ul>
                {this.state.errorsAge.map((error, i) => (
                    <li className='errors' key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    } 

    renderErrorsGender() {
        return (
            <ul>
                {this.state.errorsGender.map((error, i) => (
                    <li className='errors' key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    } 

    renderErrorsUsername() {
        return (
            <ul>
                {this.state.errorsUsername.map((error, i) => (
                    <li className='errors' key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    formTypeHandler(){
    
        switch (this.state.formStage) {
            case 'password':
                const errorStylePassword = this.state.errorsPassword[0] ? 'errors-input' : null
                return (
                    <>
                        <form onSubmit={this.handlePasswordSubmit} className="modal-form">
                            <div className="logn-form-container signup-form">
                            <h1 className='create-account'>Create your FloatingNote account</h1>
                
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
                                        className={`input-box-login-pass ${errorStylePassword}`}
                                        placeholder="Your Password *"
                                    />
                                </label>
                                {this.renderErrorsPassword()}

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
                const errorStyleAge = this.state.errorsAge[0] ? 'errors-input' : null
                const errorStyleGender = this.state.errorsGender[0] ? 'errors-input' : null
                return (
        
                        <form onSubmit={this.handleAgeSubmit} className="modal-form">
                        <div className="login-form-container gender-margin-top">
                            <h1 className='create-account'>Create your FloatingNote account</h1>

                                <label className="required-field">
                                    <span>Tell us your age</span> 
                        <input type="text"
                                        autoFocus
                                        form=''
                                        value={this.state.age}
                                        onChange={this.update('age')}
                                        className={`input-box ${errorStyleAge}`}
                                        id="age"
                                    />
                                </label>
                            {this.renderErrorsAge()}


                            <label className="required-field">
                                   <span>Gender</span>
                        <select className={`input-box-login-pass gender-selector gender-field ${errorStyleGender}`} onChange={this.update('gender')} >
                                    <option defaulvalue="Indicate your gender">Indicate your gender</option>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                    <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                        </label>
                            {this.renderErrorsGender()}

                                <input className="submit-button" type="submit" value="Continue" />
                            </div>
                        </form>
                    )
            case 'display-name':
                const errorStyleUsername = this.state.errorsUsername[0] ? 'errors-input' : null
                return (

                    <form onSubmit={this.handleUsernameSubmit} className="modal-form">
                        <div className="login-form-container gender-margin-top">
                        <h1 className='create-account'>Tell us a bit about yourself</h1>

                            <label className="required-field">
                                <span>Choose your display name</span> 
                        <input type="text"
                                    value={this.state.username ? this.state.username : ""}
                                    onChange={(e)=>this.setState({username: e.target.value})}
                                    className={`input-box ${errorStyleUsername}`}
                                    id='display-name'
                                />
                            </label>
                            {this.renderErrorsUsername()}

                            <p className='sign-in-text'>Your display name can be anything you like. Your name or artist name are good choices.</p>

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