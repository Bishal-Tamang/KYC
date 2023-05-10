'use client'
import React from "react";
import KYCLogin from '../../../components/KYCForm/KYCForm';
import './page.scss'

const KYCForm = ()=>{
  return (
    <div className="kyc__login">
        <KYCLogin />
    </div>
  )
}

export default KYCForm;