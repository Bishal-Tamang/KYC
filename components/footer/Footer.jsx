import React from 'react'
import './footer.css'
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { IoCallSharp } from 'react-icons/io5'
import { AiOutlineGooglePlus } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const Footer = ()=>{
    return(
        <div className="kyc__footer section__padding">

            <div className="kyc__footer-content early">
                <h1 id="first-element">KYC</h1>
                <p>
                Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved 
                </p>
            </div>


            <div className="kyc__footer-content">
                <h2>SOLUTIONS</h2>
                <ul>
                    <li>Risk Score</li>
                    <li>Phone Verification</li>
                    <li>Identity Verification</li>
                </ul>
            </div>

            <div className="kyc__footer-content">
                <h2>FOR BUSINESSES</h2>
                <ul>
                    <li>E-Commerce & Retail</li>
                    <li>Financial Services</li>
                    <li>Gaming</li>
                    <li>Healthcare</li>
                    <li>On Demand Economy</li>
                    <li>Telecommunications</li>
                    <li>Travel & Events</li>
                    <li>Saring Econmoy</li>
                    <li>Social & Commities</li>
                   
                </ul>
            </div>

            <div className="kyc__footer-content">
                <h2>FOR DEVELOPERS</h2>
                <ul>
                    <li>Documnetation</li>
                    <li>API Reference</li>
                    <li>System Status</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;