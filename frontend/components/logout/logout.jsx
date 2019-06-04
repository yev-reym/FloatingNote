import React from 'react';
import NavBarContainer from '../nav/nav_bar_container';

const Logout = (props) => {
    if (props.currentUser) props.logout()

    return (
        <>
        <NavBarContainer />

        <main className="main-container">
            <h1 className="logout-heading">You've signed out. Now go mobile!</h1>
        </main>
        </>
    )
}

export default Logout;