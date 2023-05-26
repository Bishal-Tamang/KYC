import React from 'react';
import './solution.css'
import temp from '../assets/temp.png'
import { FaMask } from 'react-icons/fa'
import { HiSquare2Stack } from  'react-icons/hi2'
import { GiChessKnight } from 'react-icons/gi'
const Solution = () =>{
    return (
        <div className='kyc__solution section__padding' id="solution">
            <div className="kyc__solution-container">
                <FaMask color='#fff' className="icon" size={60} />
                <h1>Minimize fraud & improve governance</h1>
                <p>Accurately verify individual people and comply with a wide range of global legislation using a seamless verification process for a faster ROI.</p>
            </div>

            <div className="kyc__solution-container">
                <HiSquare2Stack color='#fff' className="icon" size={60} />
           
                <h1>Reduce superfluous costs</h1>
                <p>Replacing manual systems with electronic verification makes the application process five times more cost-effective, in some cases reducing the cost by over 70%.</p>

            </div>

            <div className="kyc__solution-container">
                <GiChessKnight color='#fff' className="icon" size={60} />
            
                <h1>Make better strategic decisions</h1>
                <p>Create profitable new business models, which can help you to enter new markets with clarity and confidence.</p>
            </div>
        </div>
    )
}

export default Solution;