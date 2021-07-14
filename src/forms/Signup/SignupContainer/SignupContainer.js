import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import "./SignupContainer.scss"
import { registerUser } from '../../../api/api'


const SignupContainer = ({handleSetHeaderData}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setConfirm] = useState("")

    const handleEmailInput = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordInput = (event) => {
        setPassword(event.target.value)
    }

    const handleConfirmInput = (event) => {
        setConfirm(event.target.value)
    }
    
    const signupUser = () => {
        const data = {
            email,
            password,
            password_confirmation
        }
        
        registerUser(data)
            .then(res => {
                console.log(data)
                // s;
                
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className= "signup-container">
                <h2 className="signup-header">
                    First, enter your email.
                </h2>

                <div className="signup-subheader">
                    We suggest using the 
                    <strong> email address you use at work.</strong>
                </div>

                <div className="signup-email-container">
                    <input 
                        className="signup-email" 
                        type="email" 
                        placeholder="name@work-email.com" 
                        name="email" 
                        value={email}
                        onChange={handleEmailInput}
                    />
                    <input 
                        className="signup-password" 
                        type="password" 
                        placeholder="password" 
                        name="password"
                        value={password}
                        onChange={handlePasswordInput}
                    />

                    <input 
                        className="signup-confirm-password" 
                        type="password" 
                        placeholder="Confirm password" 
                        name="confirm-password"
                        value={password_confirmation}
                        onChange={handleConfirmInput}
                    />

                    <button className="signup-email-button" onClick={signupUser}>
                    Sign Up with Email
                    </button>
                </div>

                <div className="signup-checkbox">
                    <span className="email-notifications"> <input type="checkbox" name="emailnotifs" id="emailnotifs"/> <label htmlFor="emailnotifs">It's okay to send me emails about Slack.</label></span>
                    <span className="terms">By continuing, you’re agreeing to our 
                        <a href="https://slack.com/intl/en-ph/terms-of-service" target="_blank" rel="noreferrer"> Customer Terms of Service,</a> 
                        <a href="https://slack.com/intl/en-ph/trust/privacy/privacy-policy" target="_blank" rel="noreferrer"> Privacy Policy,</a>
                        <a href="https://slack.com/intl/en-ph/trust/compliance/cookie-policy" target="_blank" rel="noreferrer"> Cookie Policy.</a>
                    </span>
                </div>
            </div>
        </>
    )
}

export default SignupContainer
