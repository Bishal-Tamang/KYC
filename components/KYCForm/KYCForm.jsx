'use client'
import React, { useState } from 'react'
import {Steps, Button, Label} from 'antd';
import './login.scss'
import '../../src/app/index.css'
import '../../src/app/App.css'
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2'
import Step3 from './Step3/Step3'

const login = () =>{
   const [current, setCurrent] = useState(0);

    


   const [loginDetails, setLoginDetails] = useState(null)
   const [profileDetails, setProfileDetails] = useState(null);

    const onFinishLoginForm = (values)=>{
        setLoginDetails(values);
        setCurrent(1);
    }

    const onFinishProfileForm = (values)=>{
        setProfileDetails(values);
        setCurrent(2);
    }

    const forms = [
        <LoginForm onFinish={onFinishLoginForm} initialValues={loginDetails}/>,
        <ProfileForm onFinish={onFinishProfileForm} initialValues={profileDetails}/>,
        <Finish />
    ]

    return(
        <div className="kyc__login">

            <div className="kyc__login-heading">
                <h1>Sign Up</h1>
            </div>

            <div className="kyc__login-form-field">
                
                <Steps
                    style={{padding: '2rem 4rem'}}
                    onChange={setCurrent}
                    current={current}>
                        <Steps.Step title ="Identity" />
                        <Steps.Step title ="Address" />
                        <Steps.Step title ="Upload" />

                    </Steps>
                    {forms[current]}
                    
                {/* <Step2 /> */}
                
            </div>
           
         </div>
    )

    function LoginForm({onFinish, initialValues}){
        return <Step1 onFinish={onFinish} initialValues={initialValues}/>
    }

    function ProfileForm({onFinish, initialValues}){
        return <Step2 onFinish={onFinish} initialValues={initialValues}/>
    }

    function Finish(){
        return <Step3 />
    }
}

export default login;