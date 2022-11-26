import React from 'react'
import github from "../img/github.png"
import IG from "../img/IG.png"
import Facebook from "../img/Facebook.png"
import Gmail from "../img/gmail.png"
import "./Contact.css"
function Contact() {
    return (
        <div className='Contactcontainer'>
            <h1 className='Skillhead'>Contact</h1>
            <div className='ContactMain'>
                <div className="container">
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <div className="icon">
                                <a href="https://github.com/sarun4144">
                                    <img src={github} className="Contactimg" aria-hidden="true" alt="github"></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <h3>
                                    <a href="https://github.com/sarun4144" >Github sarun4144</a>
                                </h3>
                                <p>This is where I share code and work on projects.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <div className="icon">
                                <a href="https://www.instagram.com/_kai_sarun/">
                                    <img src={IG} className="ContactimgIG" aria-hidden="true" alt='IG'></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <h3>
                                    <a href="https://twitter.com/AdamDipinto" >_kai_sarun</a>
                                </h3>
                                <p>This is My IG.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <div className="icon">
                                <a href="https://www.facebook.com/Sarun4144">
                                    <img src={Facebook} className="Contactimg" aria-hidden="true" alt='Facebook'></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <h3>
                                    <a href="https://www.facebook.com/Sarun4144"  alt='Facebook'>สรัญ พ่วงกระแสร์</a>
                                </h3>
                                <p>This is My Facebook.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <div className="icon">
                                <a href="https://mail.google.com">
                                    <img src={Gmail} className="ContactimgGmail" aria-hidden="true" alt='Emali'></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <h3>
                                    <a  >sarun4144@gmail.com</a>
                                </h3>
                                <p>This is where You can contact me.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact