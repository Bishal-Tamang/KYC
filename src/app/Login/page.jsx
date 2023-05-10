import react from 'react'
import './page.scss'
import Link from 'next/link'
import Login from '../../../components/Login/Login'


const login = () =>{
    return(
        <div className='kyc__login'>
            <Login />
        </div>
    )
}
export default login;