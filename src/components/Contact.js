import React from 'react'
import {BiMessageDots} from 'react-icons/bi'
import {GrLinkedin} from 'react-icons/gr'
import {AiFillGithub} from 'react-icons/ai'
import {GrMail} from 'react-icons/gr'

const Contact = () => {
    return (
        <div className="contact-main">
            <div className="msg-cont">
                <p><BiMessageDots style={{fontSize:'2em'}}/> Get In Touch
                    I'd love to connect with you! Let's have a chat, send me an email here. 
                    You can also find me on social media.
                </p>
                <div className="social-icons">
                    <ul>
                        <li> <a href="https://www.linkedin.com/in/kiran-acharya/" rel="noreferrer" target="_blank"><GrLinkedin /></a></li>
                        <li><a href="https://github.com/kiranacharya26?tab=repositories"rel="noreferrer" target="_blank"><AiFillGithub /></a></li>
                        <li><GrMail /></li>
                    </ul>
                </div>
            </div>
            <form >
                <div class="form-control">   
                    <input type="email" id="email" placeholder="Enter email"/>
                </div>
                <div class="form-control">
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact
