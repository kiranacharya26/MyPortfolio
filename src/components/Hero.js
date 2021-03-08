import React from 'react'
import DP from '../images/Dp.png'
import Roll from 'react-reveal/Roll';

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className="intro-con">
                <div className="image-con">
                    <img src={DP} alt=""/>
                </div>
                <div className="intro-info">
                    <h1>Hi <Roll left cascade>  Iam kiran acharya </Roll></h1>
                    <h2>Frontend Developer</h2>
                </div>
            </div>
        </div>
    )
}

export default Hero
