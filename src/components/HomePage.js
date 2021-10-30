import React from 'react'
import '../App.css'
import { useAuth0 } from '@auth0/auth0-react';
function HomePage() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <>
            <body>
    <div className="animation01">
        <div className="line_content line_content01">
            <div className="line_wrapper line_wrapper01">
                <div className="line01"></div>
                <div className="line02"></div>
            </div>
        </div>
        <div className="line_content line_content02">
            <div className="line_wrapper line_wrapper02">
                <div className="line02"></div>
                <div className="line01"></div>
            </div>
        </div>
    </div>
    <div className="animation02">
        <div className="square">
            <span className="square_item square_item01"></span>
            <span className="square_item square_item02"></span>
            <span className="square_item square_item03"></span>
            <span className="square_item square_item04"></span>
            <span className="square_item square_item05"></span>
            <span className="square_item square_item06"></span>
            <span className="square_item square_item07"></span>
            <span className="square_item square_item08"></span>
            <span className="circle_item01"></span>
            <span className="circle_item02"></span>
            <span className="circle_item03"></span>
            <span className="circle_item04"></span>
            <span className="circle_item05"></span>
            <span className="circle_item06"></span>
            <span className="circle_item01_1"></span>
            <span className="circle_item02_2"></span>
            <span className="circle_item03_3"></span>
            <span className="circle_item04_4"></span>
            <span className="circle_item05_5"></span>
            <span className="circle_item06_6"></span>
        </div>
    </div>
    <div className="animation03">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className="animation04">
        <div className="name_plate"></div>
        <div className="name">Please Login <br />to make your <br/> Todo List </div>
    </div>
</body>
            </>
        )
    )
}

export default HomePage
