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

    // componentDidMount(){
    //     if (this.state.formStage === 'gender'){
    //         document.getElementById('age').focus();
    //     } else {
    //         document.getElementById('display-name').focus();
    //     }
    // }

    handlePath() {
     
        this.props.closeModal();
        this.props.history.push('/discover');
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.formStage === 'password') {
          
            return this.setState({formStage: "gender"});
        } else if (this.state.formStage === "gender") {
            const {age, gender, password, username, email} = this.state;
            const user = {age, gender, password, email, username};
            debugger
            this.props.signup(user).then(this.handlePath());
        } else {
          
            //update user username field
            return this.props.closeModal();
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
                            <h2>Create your FloatingNote account</h2>
                            {/* {this.renderErrors()} */}
                            <div className="signup-form">

                                <button onClick={(e) => {
                                    e.preventDefault();

                                    this.props.closeModal()
                                    this.props.returnForm('checkInfo')
                                }}
                                    className="input-box post-info-check"
                                ><span>&#9668;  {this.state.info.email </span> </button>

                                <label className="required-field">
                                    Choose a password
                        <input type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className="input-box"
                                        placeholder="Your Password *"
                                    />
                                </label>

                                <input className="submit-button" type="submit" value="Accept & Continue" />
                            </div>
                        </form> </>
                );
            case 'gender' :
                return (
        
                        <form onSubmit={this.handleSubmit} className="modal-form">
                            <h2>Create your FloatingNote account</h2>
                            {/* {this.renderErrors()} */}
                            <div className="signup-form">

                                <label className="required-field">
                                    Tell us your age
                        <input type="text"
                                        autoFocus
                                        value={this.state.age}
                                        onChange={this.update('age')}
                                        className="input-box"
                                        id="age"
                                    />
                                </label>


                                <label className="required-field">
                                   Gender
                        <select onChange={this.update('gender')}>
                                    <option value="" selected disabled hidden>--Indicate your gender--</option>
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