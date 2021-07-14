import React, { useState } from 'react'
import { userLogin } from '../../../api/api';
import "./LoginContainer.scss"
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";
import { useHistory } from "react-router-dom"

const LoginContainer = ({handleSetLoginData}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const handleEmailInput = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordInput = (event) => {
        setPassword(event.target.value)
    }

    const loginUser = () => {
        
        //create data obj for API request
        const data = {
            email,
            password
        }

        userLogin(data)
            .then(res => {
                console.log("Response from API", res)
                handleSetLoginData(res)
                //redirect to URL of his own chat
                history.push(`/user/${res.data.data.id}`)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="login-container">
                <h2 className="login-header">
                    Sign in to Slack
                </h2>

                <div className="login-subheader">
                    We suggest using the 
                    <strong> email address you use at work.</strong>
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
                    <input 
                        className="login-email" 
                        type="email" 
                        placeholder="name@work-email.com" 
                        name="email" 
                        value={email}
                        onChange={handleEmailInput}
                    />
                    <input 
                        className="login-password" 
                        type="password" 
                        placeholder="password" 
                        name="password"
                        value={password}
                        onChange={handlePasswordInput}
                    />

                    <button 
                        className="login-email-button"
                        onClick={loginUser}
                    >
                    Sign In with Email
                    </button>
                </div>
            </div> 
        </>
    )
}

export default LoginContainer
