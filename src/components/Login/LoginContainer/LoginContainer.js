import React from 'react'
import "./LoginContainer.scss"
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";

const LoginContainer = () => {
    return (
        <>
            <div className="login-container">
                <h2 className="login-header">
                    Sign in to Slack
                </h2>

                <div className="login-subheader">
                    We suggest using the 
                    <strong>email address you use at work.</strong>
                </div>

                <div className="login-buttons-container">
                    <button className="login-google"> <FcGoogle size={20} style={{marginRight: '15px'}}/> Sign In with Google</button>
                    <button className="login-apple"> <DiApple size={20} style={{marginRight: '15px'}}/> Sign In with Apple</button>
                </div>

                <div className="login-separator">
                    <hr className="separator-left"></hr>
                    <div className="separator-center">OR</div>
                    <hr className="separator-right"></hr>
                </div>

                <div className="login-email-container">
                    <input className="login-email" type="email" placeholder="name@workemail.com" />
                    <input className="login-password" type="password" placeholder="password" />
                    <button className="login-email-button"> Sign In with Email</button>
                </div>
            </div> 
        </>
    )
}

export default LoginContainer
