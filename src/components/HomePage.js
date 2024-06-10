import React from 'react'
import '../App.css'
import { useAuth0 } from '@auth0/auth0-react';
import bg from '../assets/bg.jpeg'
function HomePage() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <>
            <div className="home" style={{ background: `url(${bg})`,width:"100%",height:"100%" }}>
                </div>
            </>
        )
    )
}

export default HomePage
