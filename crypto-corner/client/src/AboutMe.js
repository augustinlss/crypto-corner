import React from "react";
import logo from './imgs/logo.png';
import bmac from './imgs/buymeacoffee.png';
import lkd from './imgs/linkdin-icon.png'

const LOGO = logo;
const BMAC = bmac;
const LKD = lkd;

function AboutMe() {
    return (
        <div>
            <header className="nav">
                <div className='navLeft'>
                    <img src={LOGO} alt="something"/>
                    <p>CryptoCorner</p>
                </div>
                <div className='navRight'>
                    <p className='navRight-item'>
                        <a href="/">Home</a>
                    </p>
                    <a className='navRight-item' href="https://bmc.link/augustinn" target="_blank" rel="noreferrer noopener" >
                        <img id='bmac' src={BMAC} />
                    </a>
                </div>
            </header>
            <div className="body">
                <div className="abtme">
                    <h1>About Me</h1>
                    <a className="lkd-link" href="https://www.linkedin.com/in/augustin-lassus-9668281b1/" target="_blank" rel="noreferrer noopener">
                        <img src={LKD} alt="" />
                    </a>
                </div>
                <p>
                    I'm a second-year student pursuing a Bachelor's degree in Computer Science and Engineering at the Technical University of Eindhoven. I have a passion for web development and enjoy working with technologies like React, Node.js, and Express to create engaging and interactive websites.
                </p>
                <p>
                    In addition to web development, I also have experience in game development. I love creating video games using Unity, exploring various game mechanics, and bringing ideas to life through immersive and entertaining gameplay experiences.
                </p>
                <p>
                    I'm constantly learning and exploring new technologies to expand my skills and stay up-to-date with the latest industry trends. I'm enthusiastic about combining my technical knowledge and creativity to build innovative and impactful projects.
                </p>
            </div>
        </div>
    )
}

export default AboutMe;