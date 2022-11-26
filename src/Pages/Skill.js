import React from "react";
import './Skill.css'
import Javascript from "../img/Javascript.svg"
import Clan from "../img/letter-c.png"
import HTML from "../img/html-5.png"
import CSS from "../img/css-3.png"
import Python from "../img/python.png"
import Java from "../img/java.png"
import PHP from "../img/php.png"
import Nodejs from "../img/nodejs.png"
import Reactlogo from "../img/react.png"
import Mongodb from "../img/mongodb.png"
import Arduino from "../img/arduino.png"
function Skill() {
    return (
        <div className="Skillcontainer">
            <h1 className='Skillhead'>Skill</h1>
            <div className="skillrow">
                <div className="skillcolumn" >
                    <div>
                        <h2 className="SubskillHead">Programming </h2>
                    </div>
                    <div class="skillmain">
                        <div class="skillroller">
                            <span id="rolltext">
                                <img className="skillimg" src={Javascript} alt="js" />
                                <br />
                                <img className="skillimgCir" src={Clan} alt="js" />
                                <br />
                                <img className="skillimgNoborder" src={HTML} alt="js" />
                                <br />
                                <img className="skillimgNoborder" src={CSS} alt="js" />
                                <br />
                                <img className="skillimgCir" src={Python} alt="js" />
                                <br />
                                <img className="skillimgCir" src={Java} alt="js" />
                                <br />
                                <img className="skillimgCir" src={PHP} alt="js" />
                                <br />

                            </span>
                        </div>


                    </div>
                </div>
                <div className="skillcolumn" >
                    <h2 className="SubskillHead">Framwork</h2>
                    <div class="skillmain">
                        <div class="framworkroller">
                            <span id="rolltext">
                                <img className="skillimgCir" src={Nodejs} alt="js" />
                                <br />
                                <img className="skillimgCir" src={Reactlogo} alt="js" />
                                <br />
                                <img className="skillimgNoborder" src={Mongodb} alt="js" />
                                <br />
                                <img className="skillimgCir" src={Arduino} alt="js" />
                                <br />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="skillcolumn2" >
                    <h2 className="SubskillHead">Language</h2>
                    <div class="skillmain">
                        <div class="Languageroller">
                            <span id="rolltext">
                                Speak
                                <div className="Languagecontainer">
                                <div style={{width:"25%",backgroundColor:"#ff5757",height:30}}></div>
                                </div>
                                Listen
                                <div className="Languagecontainer">
                                <div style={{width:"53%",backgroundColor:"#ff5757",height:30}}></div>
                                </div>
                                Read
                                <div className="Languagecontainer">
                                <div style={{width:"57%",backgroundColor:"#ff5757",height:30}}></div>
                                </div>
                                Write
                                <div className="Languagecontainer">
                                <div style={{width:"25%",backgroundColor:"#ff5757",height:30}}></div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill