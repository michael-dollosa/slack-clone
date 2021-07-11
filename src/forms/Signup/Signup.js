import React from 'react'
import "./Signup.scss"
import SignupHeader from './SignupHeader/SignupHeader'
import SignupContainer from './SignupContainer/SignupContainer'
import LoginFooter from '../Login/LoginFooter/LoginFooter'

const Signup = () => {
    return (
        <div className="signup-elements-container">
            <SignupHeader />
            <SignupContainer />
            <LoginFooter />
        </div>
    )
}

export default Signup
