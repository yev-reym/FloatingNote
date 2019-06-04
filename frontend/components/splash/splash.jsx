import React from 'react';


class Splash extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }


    handleClick(){
         this.props.openModal('checkInfo');
    }

    handleDemo(){
            const signIn = document.getElementById('signin');
            signIn.click();
    }

    render(){
        return (
            <main className="splash-app">

                <header className="carousel">

                    <figure className="carousel-top">

                        <figure className="cloud-logo">
                            <img src={window.logo} className="cloud-logo-item" />
                        </figure>

                       
                        <div className="carousel-nav">

                        <button id='signin' className="buttons signin" onClick={this.handleClick}>Sign in</button>

                        <button className="buttons signup" onClick={this.handleClick}>Create account</button>

                        </div>

                    </figure>

                    <section className="carousel-information">

                        <section className="carousel-mid">
                            <h1>Discover more with SoundCloud Go+</h1>
                            <p>SoundCloud Go+ lets you listen offline, ad-free, with over 150 million tracks — and growing.</p> 
                            <button className="buttons demo-button" onClick={this.handleDemo}>Try it free!</button>
                        </section>

                    </section>

                </header>

            </main>
        );
    }
}

export default Splash;