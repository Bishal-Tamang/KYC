import React from 'react'
import Link from 'next/link'
import './header.css'
import Image from 'next/image'
import ai from '../assets/ai.png'
const Header = () =>{
    return(
        <div className="kyc__header section__padding" id="home">
        <div className="kyc__header-content">
            <h1>Identity Verification</h1>
            <p>Worldwide electronic customer identification and verification. The easier way to sign up more customers, improve their experience and minimize risk.</p>
            
            <div className="kyc__header-content-input">
               
                <Link href="./KYCForm"><button type='button'>Get Started</button></Link>
            </div>
           
        </div>
        <div className="kyc__header-image">
            <Image src={ai} alt="ai.png" priority={true}/>
        </div>
    </div>
    )
}

export default Header