import React from 'react';
import NavBarContainer from '../nav/nav_bar_container';

const Logout = (props) => {

    if (props.currentUser) {
        return props.logout(); 
    }

    return (

        <main className='app'>
             <h1 className="logout-heading"> Youve signed out. Now go mobile!</h1>
        </main>
       
    
    )
}

export default Logout;