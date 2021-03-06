import React from 'react'
import { Link } from 'react-router-dom'
import "./LoginHeader.scss"

const LoginHeader = () => {
    return (
        <>
            <section className = "login-header">

                <div className= "login-header-left">
                </div>

                <div className= "login-header-center">
                    <img alt="Slack" src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg" height="34" title="Slack"/>
                </div>

                <div className= "login-header-right">
                        New to Slack?
                        <Link to="/Signup">
                            Create an account
                        </Link>
                </div>
                    
            </section>
        </>
    )
}

export default LoginHeader
