import React,{useState} from 'react'
import Link from 'next/link'
import logo from '../assets/logo.png'
import Image from 'next/image'
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return(
        <div className='kyc__navbar'>

            <div className="kyc__navbar-links">

                <div className="kyc__navbar-links-logo">
                    <Image src={logo} alt="logo" />
                </div>

                <div className="kyc__navbar-links-container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#kyc">What is KYC?</a></p>
                    <p><a href="#solution">Solution</a></p>
                    <p><a href="#usecase">UseCases</a></p>
               </div>

            </div>

            <div className="kyc__navbar-sign">

                <Link href="./Login"><p>Sign in</p></Link>
                <Link href="./SignUp"><button type="button">Sign up</button></Link>
            </div>

            <div className="kyc__navbar-menu">
                {toggleMenu 
                ? <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)} />
                : <RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)} />
            }

            {toggleMenu &&(
                <div className="kyc__navbar-menu-container scale-up-center">
                    <div className="kyc__navbar-menu-container-links">
                        <p><a href="#home">Home</a></p>
                        <p><a href="#wkyc">What is KYC?</a></p>
                    <p><a href="#solution">Solution</a></p>
                    <p><a href="#usecases">UseCases</a></p>
                    </div>
                    <div className="kyc__navbar-menu-container-links-sign">
                        <p>Sign in</p>
                        <Link href=""><button type='button'>Sign up</button></Link>
                    </div>
                </div>  
            )}
            </div>
        </div>
    )
}
export default Navbar;