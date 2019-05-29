import React from 'react';


class Splash extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        return (
            <main className="splash-app">
                <header className="top-banner">
                    <div className="carousel">
                        <div className="carousel-container">
                        
                        <div className="buttons">

                        <button className="signin">Sign In</button>

                        <button class-name="signup">Create Account</button>

                        </div>
                        



                        </div>
                    </div>
                </header>
            </main>
        );
    }
}

export default Splash;