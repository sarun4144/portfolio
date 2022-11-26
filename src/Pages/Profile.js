import React, { useState } from "react";
import "./Profile.css"
import Profilepic from "../img/Profilepic.jpg"
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
function Profile() {
    const [Proclick, setProclick] = useState(false);
    const [ProEducation, setProEducation] = useState(false);

    function Profilestage() {
        if (Proclick) {
            setProclick(false)
            setProEducation(false)
        } else {
            setProclick(true)
            
        }
    }
    function Education() {
        if (ProEducation) {
            setProEducation(false)

        } else {
            setProEducation(true)
        }
    }


  window.addEventListener('scroll',(event) => {
    ProfilescrollFunction()
});

function ProfilescrollFunction() {
    if (document.body.scrollTop > 320 || document.documentElement.scrollTop > 320) {
        document.getElementById("Pic").className= "Profilepic";
        document.getElementById("picslide").className= "slideUp";
        document.getElementById("picslide2").className= " slideUp";
    } else {
        document.getElementById("Pic").className = "Profilepic";
        document.getElementById("picslide").className= " ";
        document.getElementById("picslide2").className= " ";
    }
  }

    return (
        <div className='Profilecontainer'>
            {Proclick
                ?
                <>
                    <h1 className='Profilehead'>Profile</h1>
                    <div className="row">
                        <div className="col left">
                            <div className="" id="picslide">
                            <img  className='Profilepic2' id="Pic" src={Profilepic} alt="profilepic" width="380" height="500" />
                            </div>
                        </div> 
                            <div class="col right"> 
                            <div className="ProfileWrap" id="picslide2">
                            <div className="Profilecards_wrap" id="Warp">
                                <div className="Profiletext">
                                    <div className="Profileheaddetail">
                                        <span >Name : </span>
                                        <span className="Profiledetail">Sarun Pungkrasae</span>
                                        <div style={{ marginTop: 10 }}>
                                            <span >Nickname : </span>
                                            <span className="Profiledetail">KAI</span>
                                        </div>
                                        <div style={{ marginTop: 10 }}>
                                            <span >Born in: </span>
                                            <span className="Profiledetail"style={{ color: "#ff5757" }}>THAILAND</span>
                                            <span className="Profiledetail"> January 4 2001</span>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: 8 }}>
                                        {
                                            ProEducation
                                                ?
                                                <>
                                                    <span className="Profileheaddetail" onClick={Education}>Education<AiFillCaretDown /></span>
                                                    <div className="Profileeducation">
                                                        2019-<span style={{ color: "#ff5757" }}>NOW</span>
                                                        <ul className="Profileultext">
                                                            <li>
                                                               <span style={{ color: "#ff5757" }}>KMUNTB</span> 
                                                              
                                                            </li>
                                                            <li>
                                                            <span >KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK</span> 
                                                              
                                                            </li>
                                                            <li>
                                                            Academic years <span style={{ color: "#ff5757" }}> 4</span> 
                                                              
                                                            </li>
                                                            <li>
                                                            <span > College of Industrial Technology</span> 
                                                              
                                                            </li>
                                                            <li>
                                                            <span > Department of Electronics Engineering Technology</span> 
                                                              
                                                            </li>
                                                            <li>
                                                            <span style={{ color: "#ff5757" }}> GPA 3.04</span> 
                                                              
                                                            </li>


                                                        </ul>
                                                    </div>
                                                </>
                                                :
                                                <>
                                                    <span className="Profileheaddetail" onClick={Education}>Education<AiFillCaretRight /></span>

                                                </>
                                        }
                                    </div>
                                    <br />
                                    <button className="Profilebutton1" onClick={Profilestage}>ฺBack</button>

                                </div>

                            </div>
                            </div>
                        </div>
                    </div>

                </>
                :
                <>
                    <h1 className='Profilehead'>Profile</h1>
                    <div className="" id="picslide">
                    <img className='Profilepic' style={{}} src={Profilepic}  id="Pic" alt="profilepic" width="380" height="500" onClick={Profilestage} />
                    </div>
                    <br />
                </>
            }

        </div>
    )
}

export default Profile