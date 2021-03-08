import React from 'react'
import DP from '../images/DP.jpeg'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {SiCsswizardry} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {AiOutlineHtml5} from 'react-icons/ai'
import {SiPostman} from 'react-icons/si'
import {SiJsonwebtokens} from 'react-icons/si'

const About = () => {
    return (
        <div className="main-abt-cont">
            <div className="abt-cont">
                <div className="abt-img">
                    <img src={DP} alt="porfilepic"/>
                </div>
                <div className="abt-info">
                    <div className="info-style">
                        <p >
                            Hi!. I am an aspiring Front End web developer. 
                            I am passionate about learning new
                            technologies and coding. Do check out my project gallery
                            in this portfolio website.
                        </p>
                    {/* <p>
                        <h1>Jivox</h1>
                        <h2>FrontEnd Developer </h2>
                        <h2>OCT 2019 – Present | Bengaluru, Karnataka</h2>
                        <ul>
                            <li>Front-end developer- Wrote code for various ads which include advanced animations.</li>
                            <li>Worked with some of the popular brands like Nike, Unilever and Marriot and delivered high quality master/ads</li>
                            <li>Led Unilever brand account which was a self served client.</li>
                            <li>Volunteered and wrote docs under developer.io which can used as reference for new clients working on platform.</li>
                            <li>Worked on JS which are used for making the ads dynamic.</li>
                        </ul>
                    </p> */}
                </div>
            </div>
        </div>
        <div className="skill-cont">
                <div className="icons-holder">
                    <IoLogoJavascript style={style}/>
                    <FaReact style={style}/>
                    <SiCsswizardry style={style}/>
                    <FaNodeJs style={style}/>
                    <AiOutlineHtml5 style={style}/>
                    <SiPostman style={style}/>
                    <SiJsonwebtokens style={style}/>

                </div>
        </div>
    </div>               
    )
}
const style = {
    marginBottom:'4rem',
   backgroundColor:'var(#00fff2)'
}
export default About
