import React from 'react'
import "./Login.scss"
import LoginHeader from './LoginHeader/LoginHeader'
import LoginContainer from './LoginContainer/LoginContainer'
import LoginFooter from './LoginFooter/LoginFooter'

const Login = ({handleSetHeaderData}) => {
    return (
        <div className = "login-elements-container">
            <LoginHeader />
            <LoginContainer  handleSetHeaderData={handleSetHeaderData}/>
            <LoginFooter />
        </div>
    )
}

export default Login
