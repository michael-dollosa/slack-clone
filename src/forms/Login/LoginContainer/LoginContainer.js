import React, { useState } from 'react'
import { userLogin } from '../../../api/api';
import "./LoginContainer.scss"
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";
import { useHistory } from "react-router-dom"
import Warning from '../../../components/Warnings/Warning';

const LoginContainer = ({handleSetLoginData}) => {

    //set up states
    const [email, setEmail] = useState("testnochannel@example.com")
    const [password, setPassword] = useState("test12345")

    //state for toggling warning
    const [toggleWarning, setToggleWarning] = useState(false) //false - hidden //true - visible

    //for history push
    const history = useHistory()

    //to record input value of form
    const handleEmailInput = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordInput = (event) => {
        setPassword(event.target.value)
    }

    //login user logic
    const loginUser = (event) => {
        //to prevent refresh
        event.preventDefault()

        //create data obj for API request
        const data = {
            email,
            password
        }
        
        userLogin(data)
            .then(res => {
                // console.log("Response from API", res)
                //use referenced function from App to be passed down to Main Page
                handleSetLoginData(res)
                //to hide warning if success
                setToggleWarning(false)
                //redirect to URL of his own chat
                history.push(`/user/${res.data.data.id}`)
            })
            .catch(err => setToggleWarning(true))
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
                <Warning body="Kindly double check your information" showWarning={toggleWarning}/>
                <div className="login-email-container">
                    <form onSubmit={loginUser}>
                        <input 
                            className="login-email" 
                            type="email" 
                            placeholder="name@work-email.com" 
                            name="email" 
                            value={email}
                            required
                            onChange={handleEmailInput}
                        />
                        <input 
                            className="login-password" 
                            type="password" 
                            placeholder="password" 
                            name="password"
                            required
                            value={password}
                            onChange={handlePasswordInput}
                        />

                        <button 
                            className="login-email-button"
                        >
                        Sign In with Email
                        </button>
                    
                    </form>
                </div>
            </div> 
        </>
    )
}

export default LoginContainer
