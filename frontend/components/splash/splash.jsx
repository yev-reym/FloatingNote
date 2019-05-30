import React from 'react';


class Splash extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        return (
            <main className="splash-app">

                <header className="top-banner">

                    <figure className="carousel-top">

                        <figure className="cloud-logo">
                            <img src={window.logo} alt="SoundCloud Logo" className="cloud-logo"/>
                        </figure>

                       
                        <div className="carousel-nav">

                        <button className="buttons signin">Sign In</button>

                        <button className="buttons signup">Create Account</button>

                        </div>

                    </figure>

                    <section className="carousel-information">

                        <section className="carousel-mid">
                            <h2>Discover more with SoundCloud Go+</h2>
                            <p>SoundCloud Go+ lets you listen offline, ad-free, with over 150 million tracks — and growing.</p> 
                            <button className="buttons demo-button">Try it free!</button>
                        </section>

                    </section>

    
                </header>
            </main>
        );
    }
}

export default Splash;