import React from "react";
import './Skill.css'
function Skill() {
    return (
        <div className="Skillcontainer">
            <h1 className='Skillhead'>Skill</h1>
            <div className="skillrow">
                <div className="skillcolumn" >
                    <div>
                        <h2 className="SubskillHead">Programming </h2>
                    </div>
                    <div class="main">
                        <div class="roller">
                            <span id="rolltext">
                                HTML
                                <br />
                                CSS
                                <br />
                                Curiosity
                                <br />
                                <span id="spare-time">too much spare time?</span>
                                <br />
                            </span>
                        </div>


                    </div>
                </div>
                <div className="skillcolumn" >
                    <h2 className="SubskillHead">Framwork</h2>
                    <p>Some text..</p>
                </div>
                <div className="skillcolumn2" >
                    <h2 className="SubskillHead">Language</h2>
                    <p>Some text..</p>
                </div>
            </div>
        </div>
    )
}

export default Skill