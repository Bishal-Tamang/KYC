import React from 'react';
import './usecase.css'
import temp from '../assets/temp.png'
import { AiOutlineUser } from 'react-icons/ai'
import { BiUserX } from 'react-icons/bi'
import { FaUserShield } from 'react-icons/fa'
import { BiUserCheck } from 'react-icons/bi'
import { FaUserSecret } from 'react-icons/fa'
import { FaUserFriends } from 'react-icons/fa'
import { IoMdFingerPrint } from 'react-icons/io'
import { HiDocumentCheck } from 'react-icons/hi2'
import { TbUserExclamation } from 'react-icons/tb'
import { ImMagicWand } from 'react-icons/im'
import { BsEmojiSmile } from 'react-icons/bs'
import { TbMapSearch } from 'react-icons/tb'
import { MdOutlineScreenshotMonitor } from 'react-icons/md'
const Usecase = () =>{
    return (
        <div className='kyc__usecase section__padding' id="usecase">
            <h1>Our most popular usecases:</h1>
            <div className='kyc__usecase-grids'>
                <div className='kyc__usecase-grid-container' id="logo">
                    <AiOutlineUser size={45} color='#fff'/>
                    <h1>Account Opening</h1>
                </div>

                <div className='kyc__usecase-grid-container'  id="logo">
                    <BiUserX size={45} color='#fff'/>
                    <h1>AML Screening</h1>
                </div>

                <div className='kyc__usecase-grid-container'  id="logo">
                    <FaUserShield size={45} color='#fff'/>
                    <h1>Business Verification</h1>
                </div>

                <div className='kyc__usecase-grid-container'  id="logo">
                    <BiUserCheck size={45} color='#fff'/>
                    <h1>KYC Screening</h1>
                </div>

                <div className='kyc__usecase-grid-container'  id="logo">
                    <FaUserSecret size={45} color='#fff'/>
                    <h1>Fraud Prevention</h1>
                </div>

                <div className='kyc__usecase-grid-container'  id="logo">
                    <FaUserFriends size={45} color='#fff'/>
                    <h1>Case Management</h1>
                </div>

                <div className='kyc__usecase-grid-container'  id="logo">
                    <IoMdFingerPrint color='#fff' size={45}/>
                    <h1>Biometric Authentication</h1>
                </div>

                <div className='kyc__usecase-grid-container'  id="logo">
                    <HiDocumentCheck color="#fff" size={45}/>
                    <h1>Document Verification</h1>
                </div>

                <div className='kyc__usecase-grid-container'  id="logo">
                    <TbUserExclamation color='#fff' size={45}/>
                    <h1>Investor Verification</h1>
                </div>

                <div className='kyc__usecase-grid-container'  id="logo">
                    <ImMagicWand size={45} color='#fff'/>
                    <h1>User Onboarding</h1>
                </div>

                <div className='kyc__usecase-grid-container'  id="logo">
                    <BsEmojiSmile size={45} color='#fff'/>
                    <h1>Age Verification</h1>
                </div>

                <div className='kyc__usecase-grid-container' id="logo">
                    <TbMapSearch size={45} color='#fff'/>
                    <h1>Proof of Address</h1>
                </div>

                <div className='kyc__usecase-grid-container'  id="logo">
                    <MdOutlineScreenshotMonitor size={45} color='#fff'/>
                    <h1>Digitisation</h1>
                </div>
               
            </div>
        </div>
    )
}

export default Usecase;