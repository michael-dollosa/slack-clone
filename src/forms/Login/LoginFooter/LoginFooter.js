import React from 'react'
import "./LoginFooter.scss"
import { FiGlobe } from 'react-icons/fi'
import { VscChevronDown } from 'react-icons/vsc'

const LoginFooter = () => {
    return (
        <div className="footer-container">
            <span className="footer-elements"><a href="https://slack.com/intl/en-ph/legal" target="_blank" rel="noreferrer">Privacy & Terms</a></span>
            <span className="footer-elements"><a href="https://slack.com/intl/en-ph/help/requests/new" target="_blank" rel="noreferrer">Contact Us</a></span>
            <span className="footer-elements"><a href="/">
                <FiGlobe />
                Change region
                <VscChevronDown />
                </a></span>
        </div>
    )
}

export default LoginFooter
