import React from 'react'
import "./Signup.scss"
import SignupHeader from './SignupHeader/SignupHeader'
import SignupContainer from './SignupContainer/SignupContainer'
import LoginFooter from '../Login/LoginFooter/LoginFooter'

const Signup = ({handleSetHeaderData}) => {
    return (
        <div className="signup-elements-container">
            <SignupHeader />
            <SignupContainer handleSetHeaderData={handleSetHeaderData}/>
            <LoginFooter />
        </div>
    )
}

export default Signup
