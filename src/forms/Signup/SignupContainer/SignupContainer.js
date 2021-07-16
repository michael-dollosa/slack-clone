import React, { useState } from 'react'
import "./SignupContainer.scss"
import { useHistory } from "react-router-dom"
import { registerUser, userLogin } from '../../../api/api'
import Warning from '../../../components/Warnings/Warning'


const SignupContainer = ({handleSetLoginData}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setConfirm] = useState("")
    const [toggleWarning, setToggleWarning] = useState(false)
    const history = useHistory()

    const handleEmailInput = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordInput = (event) => {
        setPassword(event.target.value)
    }

    const handleConfirmInput = (event) => {
        setConfirm(event.target.value)
    }

    const resetInput = () => {
        setEmail("")
        setPassword("")
        setConfirm("")
    }

    const signupUser = (event) => {
        event.preventDefault()
        const data = {
            email,
            password,
            password_confirmation
        }
        console.log(data)
        registerUser(data)
            .then(res => {
                //console log success
                if(res.data.status !== "success") {
                    console.log("Registration Error", res)
                    console.log("Registration Res", res.data.status )
                    setToggleWarning(true)
                }
                setToggleWarning(false)
                //reset state of inputs
                resetInput()
                //since we are inside success condition, automatically login user by triggering login api
                const loginObj = {
                    email: data.email,
                    password: data.password
                }

                userLogin(loginObj)
                    .then(res => {
                        console.log("Login After Signup", res)
                        handleSetLoginData(res)
                        //redirect to URL of his own chat
                        history.push(`/user/${res.data.data.id}`)

                    })
                    .catch(err => console.log("login error",err))
            })
            .catch(err => setToggleWarning(true))
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

                <Warning body="Kindly double check your information" showWarning={toggleWarning}/>
                <div className="signup-email-container">
                    <form onSubmit={event => signupUser(event)}>
                        <input 
                            className="signup-email" 
                            type="email" 
                            placeholder="name@work-email.com" 
                            name="email" 
                            value={email}
                            onChange={handleEmailInput}
                            minLength="8"
                            required
                        />
                        <input 
                            className="signup-password" 
                            type="password" 
                            placeholder="password" 
                            name="password"
                            value={password}
                            onChange={handlePasswordInput}
                            required
                        />

                        <input 
                            className="signup-confirm-password" 
                            type="password" 
                            placeholder="Confirm password" 
                            name="confirm-password"
                            value={password_confirmation}
                            onChange={handleConfirmInput}
                            required
                        />

                        <button className="signup-email-button" >
                        Sign Up with Email
                        </button>
                    </form>
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
